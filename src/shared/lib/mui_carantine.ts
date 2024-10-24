/* eslint-disable no-restricted-imports */
import {
  CSSObject as Mui_CSSObject,
  Container as Mui_Container,
  ContainerClasses as Mui_ContainerClasses,
  DefaultTheme as Mui_DefaultTheme,
  GlobalStyles as Mui_GlobalStyles,
  ResponsiveStyleValue as Mui_ResponsiveStyleValue,
  SxProps as Mui_SxProps,
  SystemProps as Mui_SystemProps,
  Theme as Mui_Theme,
  ThemeProvider as Mui_ThemeProvider,
  createBox as Mui_createBox,
  createStack as Mui_createStack,
  createStyled as Mui_createStyled,
  createTheme as Mui_createTheme,
  css as Mui_css,
  unstable_extendSxProp as Mui_extendSxProp,
  keyframes as Mui_keyframes,
  useTheme as Mui_useTheme,
} from '@mui/system';
import {
  OverridableTypeMap as MuiOverridableTypeMap,
  OverrideProps as Mui_OverrideProps,
} from '@mui/types';
import * as React from 'react';

export type ContainerClasses = Mui_ContainerClasses;
export type CSSObject = Mui_CSSObject;
export type DefaultTheme = Mui_DefaultTheme;
export type ResponsiveStyleValue<T> = Mui_ResponsiveStyleValue<T>;
export type ThemeBase = Mui_Theme;
export type SxProps<Theme extends Object = {}> = Mui_SxProps<Theme>;
export type SystemProps<Theme extends Object = {}> = Mui_SystemProps<Theme>;

export type OverrideProps<
  M extends MuiOverridableTypeMap,
  C extends React.ElementType,
> = Mui_OverrideProps<M, C>;

export const Container = Mui_Container;
export const GlobalStyles = Mui_GlobalStyles;
export const css = Mui_css;
export const keyframes = Mui_keyframes;
export const ThemeProvider = Mui_ThemeProvider;
export const createStyled = Mui_createStyled;
export const createTheme = Mui_createTheme;
export const useThemeBase = Mui_useTheme;
export const createBox = Mui_createBox;
export const createStack = Mui_createStack;
export const extendSxProp = Mui_extendSxProp;
