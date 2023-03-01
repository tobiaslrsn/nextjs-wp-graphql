import React from 'react';

interface Column {
    children: React.ReactNode;
    width: string;
    backgroundColor: any;
    textColor: any;
}

const Column: React.FC<Column> = ({
    children,
    width,
    backgroundColor,
    textColor,
}) => {
    const textColourStyle = textColor
        ? { color: textColor }
        : { color: '#555555' };
    const backgroundColourStyle = backgroundColor
        ? { backgroundColor: backgroundColor }
        : { color: '#555555' };

    const widthStyle = width
        ? { minWidth: width, flexGrow: 1 }
        : { flexGrow: 1, flexBasis: 0 };

    return (
        <React.Fragment>
            <div
                style={{
                    padding: '20px',

                    /* backgroundColor: backgroundColor,
                    color: '#555555', */
                    ...widthStyle,
                    ...textColourStyle,
                    ...backgroundColourStyle,
                }}
                className="px-2 py-5"
            >
                {children}
            </div>
        </React.Fragment>
    );
};

export default Column;
