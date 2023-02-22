interface ThemeInterface {
    theme: ThemedColours;
    wordpressDefault: WordPressDefault;
}

interface ThemedColours {
    foreground: string;
    background: string;
    primary: string;
    secondary: string;
    tertiary: string;
    slate: string;
}

interface WordPressDefault {
    one: string;
    two: string;
    three: string;
    four: string;
    five: string;
    six: string;
    seven: string;
    eight: string;
    nine: string;
    ten: string;
    eleven: string;
    twelve: string;
}

export const theme: any = {
    foreground: '#ffffff',
    background: '#000000',
    primary: '#9DFF20',
    secondary: '#345C00',
    tertiary: '#F6F6F6',
    slate: '#F4F4F5',
};
