import React from "react"

interface Column {
    children: React.ReactNode;
    width: string;
}

const Column: React.FC <Column> = ({ children, width }) => {

    const widthStyle = width 
        ? {minWidth: width, flexGrow: 1} 
        : {flexGrow: 1, flexBasis: 0}

    return(
        <React.Fragment>
            <div style={widthStyle} className="px-2 py-5">{children}</div>
        </React.Fragment>
    )
}

export default Column