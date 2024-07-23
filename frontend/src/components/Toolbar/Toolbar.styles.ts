import styled from 'styled-components';
import ThemeSwitchButton from '../ThemeSwitchButton';

export const ToolbarWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr minmax(100px, 1fr);
`;

export const ThemeSwitchButtonStyled = styled(ThemeSwitchButton)`
    grid-column: 3;
    justify-self: end;
`;
