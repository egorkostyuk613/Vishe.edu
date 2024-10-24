import { DefaultTheme, createTheme, useThemeBase } from '../mui_carantine';
import { Theme } from '../types';

import { breakpoints, mixins, palette, typography, zIndex } from './themeOptions';
import { variables } from './themeOptions/variables';

const themeOptions = {
  breakpoints,
  mixins,
  palette,
  typography,
  zIndex,
  variables,
};

export const theme = createTheme(themeOptions as DefaultTheme) as Theme;

export const useTheme = () => {
  return useThemeBase<Theme>();
};
