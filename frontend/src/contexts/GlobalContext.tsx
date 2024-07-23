// istanbul ignore file
import { createContext, FC, ReactNode, useState } from 'react';

const getDefaultTheme = (): 'light' | 'dark' => {
    if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
        return 'dark';
    }
    return 'light';
};

type GlobalStateType = {
    theme: 'light' | 'dark';
};

type GlobalContextType = {
    globalState: GlobalStateType;
    setGlobalStateCallback?: (state: GlobalStateType) => void;
};

export const GlobalContext = createContext<GlobalContextType>({
    globalState: {
        theme: 'light',
    },
    setGlobalStateCallback: undefined,
});

const GlobalProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const defaultTheme = getDefaultTheme();
    const [globalState, setGlobalState] = useState<GlobalStateType>({
        theme: defaultTheme,
    });

    const setGlobalStateCallback = (globalState: GlobalStateType) => {
        setGlobalState(globalState);
    };

    return (
        <GlobalContext.Provider value={{ globalState, setGlobalStateCallback }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
