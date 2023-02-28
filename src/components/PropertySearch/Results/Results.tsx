import { Properties } from 'interfaces/Properties';
import React, { useState } from 'react';
import PropertyCard from './Card/PropertyCard';

interface Results {
    properties: Properties[];
}

const Results: React.FC<Results> = ({ properties }) => {
    return (
        <React.Fragment>
            <div className="max-w-5xl mx-auto mb-2 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 justify-items-stretch">
                {properties.map((e) => {
                    return (
                        <div className="mt-5" key={e.databaseId}>
                            <PropertyCard
                                key={e.databaseId}
                                title={e.title}
                                uri={e.uri}
                                propertyFeatures={e.propertyFeatures}
                                featuredImage={e.featuredImage}
                                properties={properties}
                            />
                        </div>
                    );
                })}
            </div>
        </React.Fragment>
    );
};

export default Results;
