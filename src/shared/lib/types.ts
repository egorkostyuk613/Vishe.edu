import {
  Mixins,
  Palette,
  ThemeTypography,
  Variables,
  ZIndex,
} from './theme/themeOptions';
import { ThemeBase as DefaultThemeBase } from './mui_carantine';

type DefaultTheme = Omit<DefaultThemeBase, 'transitions' | 'typography' | 'palette' | 'mixins'>;

export interface Theme extends DefaultTheme {
  typography: ThemeTypography;
  palette: Palette;
  mixins: Mixins;
  zIndex: ZIndex;
  variables: Variables;
}
