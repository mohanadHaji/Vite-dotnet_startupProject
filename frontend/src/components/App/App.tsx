import { ToolbarContainer } from '@/utilities/globalConstants';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import CreatePortal from '../CreatePortal/CreatePortal';
import Toolbar from '../Toolbar';
import { APP_TEST_ID } from './App.const';
import { AppContainer } from './App.styles';

const App: FC = () => {
    return (
        <AppContainer data-testid={APP_TEST_ID}>
            <CreatePortal portalId={ToolbarContainer}>
                <Toolbar />
            </CreatePortal>
            <Outlet />
        </AppContainer>
    );
};

export default App;
