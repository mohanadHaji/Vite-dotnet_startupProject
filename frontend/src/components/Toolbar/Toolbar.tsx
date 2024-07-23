import { FC } from 'react';
import { TOOLBAR_TEST_ID } from './Toolbar.const';
import { ThemeSwitchButtonStyled, ToolbarWrapper } from './Toolbar.styles';

export const Toolbar: FC = () => {
    return (
        <ToolbarWrapper data-testid={TOOLBAR_TEST_ID}>
            <ThemeSwitchButtonStyled />
        </ToolbarWrapper>
    );
};

export default Toolbar;
