import { createStyled } from './mui_carantine';
import { theme } from './theme';

import { Theme } from './types';

export const styled = createStyled<Theme>({
  defaultTheme: theme as Theme,
});
