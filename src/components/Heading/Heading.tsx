import { HeadingInterface } from 'interfaces/Heading';
import React from 'react';
import { getFontSizeForHeading, getTextAlign } from 'utils/fonts';

export const Heading = ({ textAlign, content, level }: HeadingInterface) => {
    //Comes from fonts in utils, to set classnames.
    const tag = React.createElement(`h${level}`, {
        dangerouslySetInnerHTML: { __html: content },
        className: `font-heading max-w-5xl mx-auto my-5 
        ${getFontSizeForHeading(level)} 
        ${getTextAlign(textAlign)}`,
    });

    return <React.Fragment>{tag} </React.Fragment>;
};
