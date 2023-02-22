import React from "react"

interface Columns {
    children?: React.ReactNode
    isStackedOnMobile: boolean;
}

const Columns: React.FC <Columns> = ({isStackedOnMobile, children}) => {
    return(
        <React.Fragment>
            <div className="my-10">
                <div className={
                    `max-w-5xl mx-auto 
                    ${isStackedOnMobile 
                    ? 'block md:flex' 
                    : 'flex'}`}
                >
                    {children}
                </div>
            </div>
        </React.Fragment>
    )
}
export default Columns