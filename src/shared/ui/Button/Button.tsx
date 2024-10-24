import { ReactNode, cloneElement, forwardRef, isValidElement } from 'react';
import { Button as MuiButton } from '@mui/base/Button';
import { clsx } from 'clsx';

import {
  ButtonContent,
  ButtonEndIcon,
  ButtonRoot,
  ButtonStartIcon,
  buttonClasses,
} from './Button.styled';

import { ButtonProps } from './Button.types';
import {useSxExtendedProps} from "shared/lib";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      slots,
      slotProps,

      variant = 'contained',

      startIcon,
      endIcon,

      loading,
      fullWidth,

      children,
      className,
      ...props
    },
    ref
  ) => {
    // @ts-ignore
    const extendedProps = useSxExtendedProps(props);

    const overrideSize = (element: ReactNode) => {
      if (isValidElement(element)) {
        return cloneElement(element, { ...element.props, size: element.props.size ?? 20 });
      }

      return element;
    };

    const computedClasses = clsx(
      buttonClasses.root,
      {
        [buttonClasses.loading]: loading,
        [buttonClasses.fullWidth]: fullWidth,

        [buttonClasses.md]: true,

        [buttonClasses.contained]: variant === 'contained',
        [buttonClasses.dark]: variant === 'dark',
        [buttonClasses.outlined]: variant === 'outlined',
        [buttonClasses.outlinedv2]: variant === 'outlinedv2',
        [buttonClasses.outlinedv3]: variant === 'outlinedv3',
        [buttonClasses.outlinedv4]: variant === 'outlinedv4',
        [buttonClasses.text]: variant === 'text',
      },
      className
    );

    return (
      <MuiButton
        slots={{ root: ButtonRoot, ...slots }}
        slotProps={{
          ...slotProps,
          root: { variant, loading, fullWidth, size: 'md', ...slotProps?.root },
        }}
        className={computedClasses}
        {...extendedProps}
        ref={ref}
      >
        {startIcon ? (
          <ButtonStartIcon className={buttonClasses.startIcon}>
            {overrideSize(startIcon)}
          </ButtonStartIcon>
        ) : null}

        <ButtonContent className={buttonClasses.content}>{children}</ButtonContent>

        {endIcon ? (
          <ButtonEndIcon className={buttonClasses.endIcon}>{overrideSize(endIcon)}</ButtonEndIcon>
        ) : null}

      </MuiButton>
    );
  }
);
