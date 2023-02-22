import React from 'react';
import { getTextAlign } from 'utils/fonts';
import { relativeToAbsoluteUrls } from 'utils/relativeToAbsoluteUrls';

interface ParagraphInterface {
    children?: string;
    content: string;
    align: string;
    textColor: string;
    textAlign?: string;
}

export const Paragraph = ({
    children,
    content,
    textColor,
    align, // from wordpress
    textAlign = 'center', // custom
}: ParagraphInterface) => {
    return (
        <p
            className={`max-w-5xl mx-auto ${getTextAlign(align)}`}
            style={{ color: textColor }}
            dangerouslySetInnerHTML={{
                __html: relativeToAbsoluteUrls(content),
            }}
        />
    );
};
