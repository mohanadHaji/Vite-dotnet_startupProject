import ThemeContextProvider from '@/styles/ThemeContextProvider';
import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ICreatePortal {
    children: ReactNode;
    portalId: string;
}

const CreatePortal: FC<ICreatePortal> = ({ children, portalId }) => {
    const portal = document.getElementById(portalId);
    if (!portal) return null;

    const toolbar = <ThemeContextProvider>{children}</ThemeContextProvider>;
    return createPortal(toolbar, portal);
};

export default CreatePortal;
