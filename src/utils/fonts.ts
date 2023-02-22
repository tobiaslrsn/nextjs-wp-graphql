interface FontInterface {
    // textAlign: string
    left: string;
    right: string;
    center: string;
}

export const getTextAlign = (textAlign = 'left') => {
    const textAlignMap: any = {
        left: 'text-left',
        right: 'text-right',
        center: 'text-center',
    };

    return `${textAlignMap[textAlign] || ''}`;
};

export const getFontSizeForHeading = (level: number) => {
    const fontSizeMap: any = {
        1: 'text-6xl',
        2: 'text-5xl',
        3: 'text-4xl',
        4: 'text-3xl',
        5: 'text-2xl',
        6: 'text-xl',
    };
    return `${fontSizeMap[level] || ''}`;
};
