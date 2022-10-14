import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { Spinner } from 'phosphor-react';
import * as S from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  variant?: 'standard' | 'filled' | 'outline' | 'approve' | 'danger';
  size?: 'small' | 'medium' | 'large';
  fullSize?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  m?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  mx?: string;
  my?: string;
  as?: React.ElementType;
  maintainDimentions?: boolean;
} & ButtonTypes;

export const Button = ({
  children,
  variant = 'filled',
  size = 'medium',
  fullSize = false,
  isLoading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) => {
  return (
    <S.Button
      type="button"
      size={size}
      variant={variant}
      fullSize={fullSize}
      isLoading={isLoading}
      disabled={disabled}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      {...props}
    >
      <S.ButtonLabel>
        {leftIcon}
        <span>{children}</span>
        {rightIcon}
      </S.ButtonLabel>

      {isLoading && (
        <S.ButtonLoading>
          <Spinner size={32} weight="light" />
        </S.ButtonLoading>
      )}
    </S.Button>
  );
};
