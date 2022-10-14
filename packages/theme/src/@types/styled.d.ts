/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { ThemeDarkLightProps } from '..';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeDarkLightProps {}
}
