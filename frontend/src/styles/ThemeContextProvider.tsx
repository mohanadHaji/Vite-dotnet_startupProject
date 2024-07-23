// istanbul ignore file
import { GlobalContext } from '@/contexts/GlobalContext';
import { FC, ReactNode, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './Them';

interface IThemeContextProvider {
    children: ReactNode;
}

export const ThemeContextProvider: FC<IThemeContextProvider> = ({
    children,
}) => {
    const { globalState } = useContext(GlobalContext);
    if (globalState.theme === 'dark') {
        return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
    }

    return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
};

export default ThemeContextProvider;
