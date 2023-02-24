export const setStorage = (key: string, value: any) => {
    if (typeof value !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

export const getStorage = (key: string, setContent: (any: any) => void) => {
    let getContent: any = window.localStorage.getItem(key);
    setContent(JSON.parse(getContent));
};
