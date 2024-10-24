import { styled } from "shared/lib";

import { ButtonVariant } from './Button.types';


export const buttonClasses = {
  root: 'Button-root',
  content: 'Button-text',
  startIcon: 'Button-startIcon',
  endIcon: 'Button-endIcon',

  loading: 'Button-loading',
  fullWidth: 'MuiButton-fullWidth',

  md: 'Button-md',

  contained: 'Button-contained',
  containedv2: 'Button-contained',
  dark: 'Button-soft',
  outlined: 'Button-outlined',
  outlinedv2: 'Button-outlined',
  outlinedv3: 'Button-outlinedv3',
  outlinedv4: 'Button-outlinedv4',
  outlinedv5: 'Button-outlinedv5',
  text: 'Button-text',
  textv2: 'Button-text',
};

interface ButtonRootProps {
  variant: ButtonVariant;
  fullWidth: boolean;
  loading: boolean;
}

export const ButtonRoot = styled('button', { name: 'Button' })<ButtonRootProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,

  WebkitAppearance: 'none',
  appearance: 'none',
  background: 'none',
  userSelect: 'none',
  border: 'none',
  color: 'white',

  alignSelf: 'stretch',
  position: 'relative',
  flexShrink: 0,

  variants: [
    {
      props: { size: 'md' },
      style: {
        fontSize: 18,
        fontWeight: 400,
        lineHeight: 18 / 15,
        padding: '15px 86px',
      },
    },
    {
      props: { variant: 'contained' },
      style: {
        border: 'none',
        borderRadius: 40,
        position: 'relative',
        overflow: 'hidden',
        color: 'white',
        zIndex: 0,
        background: theme.palette.primary.main,

        ['&:not(:disabled):hover']: {
          background: theme.palette.primary.hover,
        },
      },
    },
    {
      props: { variant: 'containedv2' },
      style: {
        border: 'none',
        borderRadius: 40,
        position: 'relative',
        overflow: 'hidden',
        color: 'white',
        zIndex: 0,
        padding: "10px 31px",
        fontSize: 17,
        lineHeight: "24px",
        fontWeight: 700,
        background: '#778DA9',

        [`& .${buttonClasses.content}`]: {
          display: 'flex',
          alignItems: 'center',
        },
      },
    },
    {
      props: { variant: 'outlined' },
      style: {
        borderRadius: 40,
        color: theme.palette.primary.main,

        ['&:not(:disabled):hover:after']: {
          borderColor: theme.palette.primary.hover,
        },

        ['&:after']: {
          content: '""',
          position: 'absolute',
          inset: 0,
          borderRadius: 40,
          border: '1px solid #756EDE',
          pointerEvents: 'none',
        },
      },
    },
    {
      props: { variant: 'outlinedv2' },
      style: {
        borderRadius: 25,
        color: '#6A0DAD',
        padding: '12px 120px',

        ['&:not(:disabled):hover:after']: {
          borderColor: theme.palette.primary.hover,
        },

        ['&:after']: {
          content: '""',
          position: 'absolute',
          inset: 0,
          borderRadius: 25,
          border: '1px solid #6A0DAD',
          pointerEvents: 'none',
        },
      },
    },
    {
      props: { variant: 'outlinedv3' },
      style: {
        borderRadius: 25,
        color: '#FFFFFF',
        padding: '16px 46px',

        ['&:not(:disabled):hover:after']: {
          borderColor: '#d5d5d5',
        },

        ['&:after']: {
          content: '""',
          position: 'absolute',
          inset: 0,
          borderRadius: 25,
          border: '2px solid #FFFFFF',
          pointerEvents: 'none',
        },
      },
    },
    {
      props: { variant: 'outlinedv4' },
      style: {
        borderRadius: 25,
        color: '#8A2BE2',
        padding: '18px 41px',

        ['&:not(:disabled):hover:after']: {
          borderColor: '#8768be',
          color: '#8768be',
        },

        ['&:after']: {
          content: '""',
          position: 'absolute',
          inset: 0,
          borderRadius: 25,
          border: '2px solid #8A2BE2',
          pointerEvents: 'none',
        },
      },
    },
    {
      props: { variant: 'outlinedv5' },
      style: {
        borderRadius: 80,
        color: '#778DA9',
        padding: '14px 20px',

        ['&:not(:disabled):hover:after']: {
          borderColor: '#778DA9',
          color: '#778DA9',
        },

        ['&:after']: {
          content: '""',
          position: 'absolute',
          inset: 0,
          borderRadius: 25,
          border: '2px solid #778DA9',
          pointerEvents: 'none',
        },

        [`& .${buttonClasses.content}`]: {
          display: 'flex',
          alignItems: 'center',
        },
      },
    },

    {
      props: { variant: 'dark' },
      style: {
        borderRadius: 100,
        padding: "12px 33px",
        fontWeight: 400,

        color: theme.palette.text.primary,
        background: theme.palette.dark.main,

        ['&:not(:disabled):hover:after']: {
          borderColor: theme.palette.primary.hover,
        },

        ['&:after']: {
          content: '""',
          position: 'absolute',
          inset: 0,
          borderRadius: 100,
          pointerEvents: 'none',
        },
      },
    },
    {
      props: { variant: 'text' },
      style: {
        background: 'none',
        border: 'none',
        color: '#8A2BE2',
        borderRadius: 8,
        padding: 0,
        lineHeight: 'inherit',
        display: 'inline-flex',

        ['&:not(:disabled):hover']: {
          color: '#8768be',
        },
      },
    },
    {
      props: { variant: 'text' },
      style: {
        background: 'none',
        border: 'none',
        color: '#8A2BE2',
        borderRadius: 8,
        padding: 0,
        lineHeight: 'inherit',
        display: 'inline-flex',

        ['&:not(:disabled):hover']: {
          color: '#8768be',
        },
      },
    },
    {
      props: { variant: 'textv2' },
      style: {
        background: 'none',
        border: 'none',
        color: '#415A77',
        fontSize: 17,
        fontWeight: 700,
        alignItems: 'center',
        borderRadius: 8,
        padding: 0,
        lineHeight: 'inherit',
        display: 'inline-flex',
        width: 'fit-content',
        marginLeft: 'auto',
        [`& .${buttonClasses.content}`]: {
          display: 'flex',
        },

        ['&:not(:disabled):hover']: {
          color: 'rgba(65,90,119,0.80)',
        },
      },
    },
    { props: { fullWidth: true }, style: { width: '100%' } },
    {
      props: { loading: true },
      style: {
        [`& .${buttonClasses.content}, .${buttonClasses.startIcon}, .${buttonClasses.endIcon}`]: {
          opacity: 0,
        },
      },
    },
  ],

  ['&:not(:disabled)']: {
    cursor: 'pointer',
  },

  ['&:disabled']: {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
}));

export const ButtonContent = styled('div', { name: 'Button', slot: 'content' })({
  textDecoration: 'none',
});

export const ButtonStartIcon = styled('div', { name: 'Button', slot: 'startIcon' })({
  height: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: -4,
});

export const ButtonEndIcon = styled('div', { name: 'Button', slot: 'endIcon' })({
  height: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: -4,
});

export const ButtonLoadingContainer = styled('div')({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',
});
