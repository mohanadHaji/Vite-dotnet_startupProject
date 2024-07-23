/* eslint-disable reactFastRefresh/only-export-components */
import { lightTheme } from '@/styles';
import { render, RenderOptions } from '@testing-library/react';
import { ReactElement, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

const TestUtilsProviders = ({ children }: { children: ReactNode }) => {
    return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
};

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
): ReturnType<typeof render> =>
    render(ui, { wrapper: TestUtilsProviders, ...options });

export { customRender as render };
