import ButtonLink from "components/ButtonLink/ButtonLink";
import React from "react"


interface CtaButton {
buttonLabel: string;
destination: string;
align:string;
}
const CallToActionButton:React.FC<CtaButton> = ({buttonLabel, destination, align = 'left'}) => {
    const alignMap: any = {
        left: 'text-align',
        center: 'text-center',
        right: 'text-right'
    }

    return(
        <React.Fragment>
            <div className={alignMap[align]}>
                <ButtonLink destination={destination} label={buttonLabel}/>
            </div>
        </React.Fragment>
    )
}

export default CallToActionButton