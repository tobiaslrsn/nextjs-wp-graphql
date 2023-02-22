import { Properties } from 'interfaces/Properties';
import React, { useState } from 'react';

interface Results {
    properties: Properties[];
}

const Results: React.FC<Results> = ({ properties }) => {
    return (
        <React.Fragment>
            <div className="max-w-5xl mx-auto grid grid-cols-3 gap-5 mb-10 mt-5 px-5">
                {properties.map((e) => {
                    return (
                        <div key={e.databaseId}>
                            <p>NAME: {e.title}</p>
                            <p>
                                BATHROOMS:{' '}
                                {e.propertyFeatures?.bathrooms === null
                                    ? 'none'
                                    : e.propertyFeatures?.bathrooms}
                            </p>
                            <p>
                                PARKING:{' '}
                                {e.propertyFeatures.hasParking === null
                                    ? 'none'
                                    : 'yes'}
                            </p>
                        </div>
                    );
                })}
            </div>
        </React.Fragment>
    );
};

export default Results;
