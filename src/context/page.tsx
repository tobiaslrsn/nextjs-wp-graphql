import { createContext, useContext } from 'react';

const PageContext = createContext('');

export const PageWrapper = ({ value, children }: any) => {
    return (
        <PageContext.Provider value={value}>{children}</PageContext.Provider>
    );
};

export const usePageContext = () => {
    return useContext<any>(PageContext);
};
