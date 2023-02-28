import { faBath, faBed, faCar, faDog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePageContext } from 'context/Page';
import { Properties, PropertyFeatures } from 'interfaces/Properties';
import { RootObject } from 'interfaces/Root';
import Image from 'next/image';
import numeral from 'numeral';

import React from 'react';

const PropertyFeaturess: React.FC = () => {
    const { propertyFeatures, title, featuredImage }: Properties =
        usePageContext();

    return (
        <React.Fragment>
            <div className="max-w-lg max-auto my-10 bg-white text-slate-900 p-5 text-center">
                <h1 className="mb-10 font-bold text-xl">{title}</h1>
                <div className="flex flex-row justify-evenly mb-5 gap-3">
                    <div className="flex justify-center text-left gap-5 flex-col">
                        <div className="flex gap-2 items-center">
                            {/*    <Image
                            src={"blä"}
                            width={100}
                            height={100}
                            alt={''}
                        /> */}
                            <FontAwesomeIcon icon={faBed} />
                            {propertyFeatures.bedrooms} Bedrooms
                        </div>
                        <div className="flex gap-2 items-center">
                            <FontAwesomeIcon icon={faBath} />
                            {propertyFeatures.bathrooms} Bathrooms
                        </div>
                    </div>
                    <div className="flex justify-evenly text-left gap-5 flex-col">
                        <div className="flex gap-2 items-center">
                            {propertyFeatures.hasParking ? (
                                <React.Fragment>
                                    <FontAwesomeIcon icon={faCar} />
                                    Parking available
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <FontAwesomeIcon icon={faCar} />
                                    No parking
                                </React.Fragment>
                            )}
                        </div>
                        <div className="flex gap-2 items-center">
                            {propertyFeatures.petFriendly ? (
                                <React.Fragment>
                                    <FontAwesomeIcon icon={faDog} />
                                    Pet friendly
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <FontAwesomeIcon icon={faDog} />
                                    Not pet friendly
                                </React.Fragment>
                            )}
                        </div>
                    </div>
                </div>
                <h3 className="text-5xl font-bold text-center">
                    £{numeral(propertyFeatures.price).format('0,0')}
                </h3>
            </div>
        </React.Fragment>
    );
};

export default PropertyFeaturess;
