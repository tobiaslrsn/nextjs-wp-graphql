import { Properties } from 'interfaces/Properties';
import { SlugNodes } from 'interfaces/Slug';
import { NextRouter, useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Pagination from './Pagination/Pagination';
import Results from './Results/Results';
import queryString, { ParsedQuery } from 'query-string';

const PropertySearch: React.FC = () => {
    const [properties, setProperties] = useState<Properties[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [totalResults, setTotalResults] = useState<number>(0);

    const pageSize: number = 3;
    const router: NextRouter = useRouter();

    const handlePagination = async (pageNumber: string) => {
        await router.push(
            `${
                (router.query.slug as string | any).join('/') as string
            }?page=${pageNumber}`,
            null as any,
            {
                shallow: true,
            }
        );
        search();
    };

    const search = async () => {
        setIsLoading(true);

        const { page }: string | any = queryString.parse(
            window.location.search
        );

        fetch('/api/search', {
            method: 'POST',
            body: JSON.stringify({
                page: parseInt(page || '1'),
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setIsLoading(false);
                setProperties(data.properties);
                setTotalResults(data.total);
                console.log(data);
            })
            .catch((e) => {
                console.log('error: ', e);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        search();
        console.log(isLoading);
    }, []);

    return (
        <React.Fragment>
            {isLoading ? (
                <>LOADING</>
            ) : !properties ? (
                <>No properties for sale right now</>
            ) : (
                <React.Fragment>
                    <Results properties={properties} />
                    <Pagination
                        onPagination={handlePagination}
                        totalPages={Math.ceil(totalResults / pageSize)}
                    />
                </React.Fragment>
            )}
        </React.Fragment>
    );
};

export default PropertySearch;
