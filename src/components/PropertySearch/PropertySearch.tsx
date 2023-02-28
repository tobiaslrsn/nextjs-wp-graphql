import { Properties, PropertyFeatures } from 'interfaces/Properties';
import { SlugNodes } from 'interfaces/Slug';
import { NextRouter, useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Pagination from './Pagination/Pagination';
import Results from './Results/Results';
import queryString, { ParsedQuery } from 'query-string';
import Filters from './filters/Filters';

interface SearchAndFilter {
    filtering: PropertyFeatures;
}

const PropertySearch: React.FC<SearchAndFilter> = ({ filtering }) => {
    const [properties, setProperties] = useState<Properties[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [totalResults, setTotalResults] = useState<number>(0);

    const pageSize: number = 3;
    const router: NextRouter = useRouter();

    const handlePagination = async (pageNumber: string) => {
        const {
            hasParking,
            petFriendly,
            minPrice,
            maxPrice,
        }: ParsedQuery<string> = queryString.parse(window.location.search);

        await router.push(
            `${
                (router.query.slug as string | any).join('/') as string
            }?page=${pageNumber}&petFriendly=${
                petFriendly === 'true'
            }&hasParking=${
                hasParking === 'true'
            }&minPrice=${minPrice}&maxPrice=${maxPrice}`,
            null as any,
            {
                shallow: true,
            }
        );

        search();
    };

    const search = async () => {
        setIsLoading(true);

        const {
            page,
            minPrice,
            maxPrice,
            hasParking,
            petFriendly,
        }: ParsedQuery | any = queryString.parse(window.location.search);

        const filters: ParsedQuery<PropertyFeatures | any> = {};

        if (hasParking === 'true') {
            filters.hasParking = true;
        }

        if (petFriendly === 'true') {
            filters.petFriendly = true;
        }
        if (minPrice) {
            filters.minPrice = parseInt(minPrice);
        }
        if (maxPrice) {
            filters.maxPrice = parseInt(maxPrice);
        }

        fetch('/api/search', {
            method: 'POST',
            body: JSON.stringify({
                page: parseInt(page || '1'),
                ...filters,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setIsLoading(false);
                setProperties(data.properties);
                setTotalResults(data.total);
                console.log('DATA: ', data);
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
    }, []);

    const handleSearch = async ({
        petFriendly,
        hasParking,
        minPrice,
        maxPrice,
    }: PropertyFeatures) => {
        await router.push(
            `${
                (router.query.slug as string | any).join('/') as string
            }?page=1&petFriendly=${!!petFriendly}&hasParking=${!!hasParking}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
            null as any,
            {
                shallow: true,
            }
        );
        search();
    };

    return (
        <React.Fragment>
            {isLoading ? (
                // <>LOADING</>
                <></>
            ) : !properties ? (
                <>No properties for sale right now</>
            ) : (
                <React.Fragment>
                    <Filters
                        onSearch={handleSearch}
                        filterByFeature={filtering}
                    />
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
