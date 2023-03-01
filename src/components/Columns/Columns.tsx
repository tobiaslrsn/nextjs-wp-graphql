import React from 'react';

interface Columns {
    children?: React.ReactNode;
    isStackedOnMobile: boolean;
    backgroundColor: string;
    textColor?: string;
}

const Columns: React.FC<Columns> = ({
    backgroundColor,
    isStackedOnMobile,
    children,
    textColor,
}) => {
    console.log('BG: ', backgroundColor);
    return (
        <React.Fragment>
            <div className="my-10">
                <div
                    className={`max-w-7xl mx-auto 
                    ${isStackedOnMobile ? 'block md:flex' : 'flex'}`}
                    style={{
                        backgroundColor: backgroundColor,
                        color: '#555555',
                        padding: '20px',
                    }}
                >
                    {children}
                </div>
            </div>
        </React.Fragment>
    );
};
export default Columns;
