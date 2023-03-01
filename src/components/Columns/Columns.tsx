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
    const textColourStyle = textColor
        ? { color: textColor }
        : { color: '#555555' };
    const backgroundColourStyle = backgroundColor
        ? { backgroundColor: backgroundColor }
        : { color: '#555555' };

    return (
        <React.Fragment>
            <div
                className="my-10"
                style={{
                    backgroundColor: backgroundColor,
                    color: '#555555',
                    padding: '20px',
                    // ...textColourStyle, ...backgroundColourStyle
                }}
            >
                <div
                    className={`max-w-5xl mx-auto 
                    ${isStackedOnMobile ? 'block md:flex' : 'flex'}`}
                >
                    {children}
                </div>
            </div>
        </React.Fragment>
    );
};
export default Columns;
