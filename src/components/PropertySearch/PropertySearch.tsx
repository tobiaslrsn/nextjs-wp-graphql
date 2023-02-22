import { Properties } from 'interfaces/Properties';
import React, { useEffect, useState } from 'react';
import Results from './Results/Results';

const PropertySearch: React.FC = () => {
    const [properties, setProperties] = useState<Properties[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const search = async () => {
        setIsLoading(true);

        fetch('/api/search')
            .then((res) => res.json())
            .then((data) => {
                setIsLoading(false);
                setProperties(data.properties);
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
                <Results properties={properties} />
            )}
        </React.Fragment>
    );
};

export default PropertySearch;
