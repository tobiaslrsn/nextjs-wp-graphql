import { Properties } from 'interfaces/Properties';
import React, { useEffect, useState } from 'react';
import Results from './Results/Results';

const PropertySearch: React.FC = () => {
    const [properties, setProperties] = useState<Properties[]>([]);

    const search = async () => {
        const response: Response = await fetch(`/api/search`);
        const data = await response.json();

        setProperties(data.properties);
        console.log('SEARCH DATA: ', data.properties);
    };

    useEffect(() => {
        search();
    }, []);

    return (
        <React.Fragment>
            <Results properties={properties} />
        </React.Fragment>
    );
};

export default PropertySearch;
