import Link from 'next/link';
import React from 'react';

interface ButtonLink {
    destination: string;
    label: string;
}

const ButtonLink: React.FC<ButtonLink> = ({ destination, label }) => {
    return (
        <React.Fragment>
            <div>
                <Link href={destination}>
                    <div className="btn">{label}</div>
                </Link>
            </div>
        </React.Fragment>
    );
};

export default ButtonLink;
