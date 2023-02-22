import { Properties } from 'interfaces/Properties';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import numeral from 'numeral';

const PropertyCard: React.FC<Properties> = (props) => {
    return (
        <React.Fragment>
            <Link
                href={props.uri}
                className="border-2 border border-gray-200 p-5 block bg-slate-100 hover:bg-slate-200"
            >
                <div className="flex w-full">
                    <Image
                        alt={`photo of ${props.title}`}
                        src={props.featuredImage.node.sourceUrl}
                        width={300}
                        height={200}
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="mt-3 text-lg font-bold text-slate-500">
                    {props.title}
                </div>
                <div className="text-lg  text-slate-500">
                    {numeral(props.propertyFeatures.price).format('0,0')}
                </div>
            </Link>
        </React.Fragment>
    );
};

export default PropertyCard;
