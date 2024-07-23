import { GlobalContext } from '@/contexts/GlobalContext';
import { FC, useContext } from 'react';
import { ISwitchProps } from './ThemeSwitchButton.const';
import { SwitchStyled } from './ThemeSwitchButton.styles';

const ThemeSwitchButton: FC<ISwitchProps> = ({ ...props }) => {
    const { globalState, setGlobalStateCallback } = useContext(GlobalContext);
    const onChange = (checked: boolean) => {
        if (checked) {
            setGlobalStateCallback?.({ ...globalState, theme: 'dark' });
            return;
        }
        setGlobalStateCallback?.({ ...globalState, theme: 'light' });
    };
    return (
        <SwitchStyled
            {...props}
            defaultChecked={globalState.theme === 'dark'}
            onChange={onChange}
            checkedChildren="dark mode"
            unCheckedChildren="light mode"
        />
    );
};

export default ThemeSwitchButton;
