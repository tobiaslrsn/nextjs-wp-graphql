import { Properties } from 'interfaces/Properties';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import numeral from 'numeral';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBathtub,
    faBed,
    faCar,
    faDog,
} from '@fortawesome/free-solid-svg-icons';
const PropertyCard: React.FC<Properties> = (props) => {
    return (
        <React.Fragment>
            <Link
                href={props.uri}
                className="border-2 border border-gray-200 p-5 block bg-slate-100 hover:bg-slate-200 fader h-[100%]"
            >
                <div className="flex w-full justify-center fader">
                    <Image
                        alt={`photo of ${props.title}`}
                        src={props.featuredImage.node.sourceUrl}
                        width={500}
                        height={300}
                        style={{ objectFit: 'cover' }}
                        className="h-[200px] w-[100%]"
                        priority
                    />
                </div>
                <div className="mt-3 text-lg font-bold text-slate-500">
                    {props.title}
                </div>
                <div className="text-lg text-slate-500">
                    {numeral(props.propertyFeatures.price).format('0,0')}
                </div>
                <div className="flex justify-between text-sm mt-3">
                    <div className="flex gap-1 items-center">
                        <FontAwesomeIcon icon={faBathtub} size="lg" />
                        {props.propertyFeatures.bathrooms === null ? (
                            <React.Fragment>none</React.Fragment>
                        ) : props.propertyFeatures.bathrooms! === 1 ? (
                            <React.Fragment>
                                {props.propertyFeatures.bathrooms} bathroom
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {props.propertyFeatures.bathrooms} bathrooms
                            </React.Fragment>
                        )}
                    </div>
                    <div className="flex gap-1 items-center">
                        <FontAwesomeIcon icon={faBed} />
                        {props.propertyFeatures.bedrooms} bedrooms
                    </div>
                </div>
                {(!!props.propertyFeatures.hasParking ||
                    !!props.propertyFeatures.petFriendly) && (
                    <div className="flex justify-between text-sm mt-3">
                        <div className="flex gap-1 items-center">
                            {!!props.propertyFeatures.hasParking && (
                                <React.Fragment>
                                    <FontAwesomeIcon icon={faCar} /> Parking
                                    available
                                </React.Fragment>
                            )}
                        </div>
                        <div className="flex gap-1 items-center">
                            {!!props.propertyFeatures.petFriendly && (
                                <React.Fragment>
                                    <FontAwesomeIcon icon={faDog} /> Pet
                                    friendly
                                </React.Fragment>
                            )}
                        </div>
                    </div>
                )}
            </Link>
        </React.Fragment>
    );
};

export default PropertyCard;
