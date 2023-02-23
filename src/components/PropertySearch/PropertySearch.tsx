import { Properties } from 'interfaces/Properties';
import React, { useEffect, useState } from 'react';
import Pagination from './Pagination/Pagination';
import Results from './Results/Results';

const PropertySearch: React.FC = () => {
    const [properties, setProperties] = useState<Properties[]>([]);
    const [totalResults, setTotalResults] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const pageSize = 3;

    const search = async () => {
        setIsLoading(true);

        fetch('/api/search')
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
                        totalPages={Math.ceil(totalResults / pageSize)}
                    />
                </React.Fragment>
            )}
        </React.Fragment>
    );
};

export default PropertySearch;
