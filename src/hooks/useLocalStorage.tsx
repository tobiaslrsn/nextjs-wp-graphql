import { useState, useEffect } from 'react';

/* import React from 'react';

export const useLocalStorage = (keyName: any, defaultValue: any): any => {
    const [storedValue, setStoredValue] = React.useState(() => {
        try {
            const value: any = window.localStorage.getItem(keyName);

            if (value) {
                return JSON.parse(value);
            } else {
                window.localStorage.setItem(
                    keyName,
                    JSON.stringify(defaultValue)
                );
                return defaultValue;
            }
        } catch (err: any) {
            return defaultValue;
        }
    });

    const setValue = (newValue: any) => {
        try {
            window.localStorage.setItem(keyName, JSON.stringify(newValue));
        } catch (err: any) {
            setStoredValue(newValue);
        }
        return [storedValue, setValue];
    };
};
 */ const getStorageData = (keyName: any) => {
    useEffect(() => {
        localStorage.getItem(keyName);
    }, []);
};

export const useLocalStorage = (keyName: any) => {
    const [value, setValue] = useState(() => {
        return getStorageData(keyName);
    });

    useEffect(() => {
        localStorage.setItem(keyName, JSON.stringify(value));
    }, [keyName, value]);

    return [value, setValue];
};
