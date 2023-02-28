import { Gallery, InnerBlockGallery } from 'interfaces/Gallery';
import { InnerBlock } from 'interfaces/Menu';
import { RootObject } from 'interfaces/Root';
import Image from 'next/image';
import React, { Key } from 'react';

const Gallery: React.FC<Gallery> = (props) => {
    const columnWidth: number = 100 / props.attributes.columns;

    let maxHeight: any = 0;
    let maxWidth: any = 0;

    if (props.attributes.imageCrop) {
        props.innerBlocks.forEach((item) => {
            if (item.attributes.height > maxHeight) {
                maxHeight = item.attributes.height;
            }
            if (item.attributes.width > maxWidth) {
                maxWidth = item.attributes.width;
            }
        });
    }

    return (
        <React.Fragment>
            <div className="flex flex-wrap max-w-5xl mx-auto">
                {props.innerBlocks.map((item: InnerBlockGallery) => (
                    <React.Fragment>
                        <div
                            style={{
                                width: `${columnWidth}%`,
                            }}
                            className="p-5 flex-grow"
                            key={item.id}
                        >
                            <Image
                                src={item.attributes.url}
                                height={maxHeight || item.attributes.height}
                                width={maxWidth || item.attributes.width}
                                alt={item.attributes.alt}
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </React.Fragment>
    );
};

export default Gallery;
