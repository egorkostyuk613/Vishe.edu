import { ButtonProps as MuiButtonProps } from '@mui/base';
import { ReactNode } from 'react';
import {SystemSxProps} from "shared/lib";

export interface ButtonProps extends MuiButtonProps, SystemSxProps {
  fullWidth?: boolean;
  color?: never;

  loading?: boolean;

  variant?: ButtonVariant;

  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export type ButtonVariant = 'contained' | 'containedv2' | 'dark' | 'outlined' | 'text' | 'textv2' | 'outlinedv2' | 'outlinedv3' | 'outlinedv4' | 'outlinedv5';

declare module '@mui/base/Button' {
  export interface ButtonRootSlotPropsOverrides {
    variant?: ButtonVariant;
    fullWidth?: boolean;
    loading?: boolean;
    size?: 'md';
  }

  export interface ButtonSlots {}
}
