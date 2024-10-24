/* eslint-disable no-useless-computed-key */
import { CSSObject } from '../../mui_carantine';

import { palette } from './palette';

const bgColor = palette.grey.A10;
const thumbColor = palette.grey.A10;

export const mixins: Record<string, CSSObject> = {
  noScrollbar: {
    'scrollbarWidth': 'none',

    'msOverflowStyle': 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },

  customScrollbar: {
    '&::-webkit-scrollbar': {
      width: 6,

      ['&-track']: { background: bgColor },
      ['&-thumb']: { backgroundColor: thumbColor },
    },
  },

  textTruncate: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  hover: {
    cursor: 'pointer',
    outline: '1px solid transparent',

    ['&:not(:disabled):hover']: {
      outline: `1px solid ${palette.primary.hover}`,
      boxShadow:
        '0px 0px 20px 0px rgba(58, 137, 255, 0.85), 0px 0px 8px 0px rgba(26, 159, 255, 0.85)',
    },
  },

  hoverSmall: {
    cursor: 'pointer',
    outline: '1px solid transparent',

    ['&:not(:disabled):hover']: {
      outline: `1px solid ${palette.primary.hover}`,
      boxShadow: `0px 0px 11px 1px ${palette.primary.hover}`,
    },
  },
};
