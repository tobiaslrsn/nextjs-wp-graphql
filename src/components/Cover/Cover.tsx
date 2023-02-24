import { usePageContext } from 'context/page';
import { CoverInterface } from 'interfaces/Cover';
import Image from 'next/image';
import React from 'react';

export const Cover = ({ children, background }: CoverInterface) => {
    const { featuredImage }: any = usePageContext();

    return (
        <React.Fragment>
            <div className="h-[90vh] mt-[] text-white bg-zinc-100 relative min-h-[400px] flex justify-center items-center">
                {(!!background || !!featuredImage) && (
                    <Image
                        alt="cover"
                        src={background || featuredImage}
                        fill={true}
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                )}

                <div className="max-w-5xl z-10">{children}</div>
            </div>
        </React.Fragment>
    );
};
