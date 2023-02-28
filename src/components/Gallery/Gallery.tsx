import { Gallery, InnerBlockGallery } from 'interfaces/Gallery';
import { InnerBlock } from 'interfaces/Menu';
import { RootObject } from 'interfaces/Root';
import React, { Key } from 'react';

const Gallery: React.FC<Gallery> = (props) => {
    console.log('GALLERY PROPS: ', props);

    {
        props.attributes?.columns || 3;
    } // Set this in HTML

    console.log(props.attributes);

    return (
        <React.Fragment>
            <div className="flex flex-wrap max-w-5xl mx-auto">
                {props.innerBlocks.map((item: InnerBlockGallery) => (
                    <React.Fragment>
                        TEST: {item.name || 'hello'} <br />
                        TEST: {item.originalContent}
                    </React.Fragment>
                ))}
            </div>
        </React.Fragment>
    );
};

export default Gallery;
