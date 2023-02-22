import { Properties } from 'interfaces/Properties';
import React, { useState } from 'react';
import PropertyCard from './Card/PropertyCard';

interface Results {
    properties: Properties[];
}

const Results: React.FC<Results> = ({ properties }) => {
    return (
        <React.Fragment>
            <div className="max-w-5xl mx-auto grid grid-cols-3 gap-2 mb-2">
                {properties.map((e) => {
                    return (
                        <PropertyCard
                            key={e.databaseId}
                            title={e.title}
                            uri={e.uri}
                            propertyFeatures={e.propertyFeatures}
                            featuredImage={e.featuredImage}
                        />
                    );
                })}
            </div>
        </React.Fragment>
    );
};

export default Results;
