import {
  SxProps as SxPropsBase,
  SystemProps as SystemPropsBase,
  extendSxProp as extendSxPropBase,
} from './mui_carantine';

import { Theme } from './types';

type SxProps = SxPropsBase<Theme>;
type SystemProps = SystemPropsBase<Theme>;

export interface SystemSxProps extends SystemProps {
  sx?: SxProps;
}

const extendSxProp = extendSxPropBase;

export type OmitSystemPropsFromProps<Props> = {
  [K in Exclude<keyof Props, keyof SystemProps>]: Props[K];
};

export const useSxExtendedProps = <Props extends SystemSxProps>(
  props: Props
): OmitSystemPropsFromProps<Props> & { sx?: SxPropsBase } => {
  return extendSxProp(props);
};
