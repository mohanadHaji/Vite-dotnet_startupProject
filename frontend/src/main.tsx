/* istanbul ignore file */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import GlobalProvider from './contexts/GlobalContext';
import ErrorPage from './pages/ErrorPage';
import MainPage from './pages/MainPage';
import { GlobalStyles } from './styles';
import ThemeContextProvider from './styles/ThemeContextProvider';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/wetherforcast',
        element: (
            <div>
                xxxxx
                <Outlet context={{ hasY: 'true' }} />
            </div>
        ),
    },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GlobalProvider>
            <ThemeContextProvider>
                <GlobalStyles />
                <RouterProvider router={router} />
            </ThemeContextProvider>
        </GlobalProvider>
    </React.StrictMode>,
);
