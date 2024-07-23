import 'styled-components';
import { ITheme } from '../styles';


declare module 'styled-components' {
    interface DefaultTheme extends ITheme {}
}

