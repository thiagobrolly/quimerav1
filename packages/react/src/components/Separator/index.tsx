import React from 'react';
import * as S from './styles';

export type SeparatorProps = {
  color?: string;
  m?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  mx?: string;
  my?: string;
} & React.HTMLAttributes<HTMLElement>;

export const Separator = ({
  color,
  my = '0.8rem',
  ...props
}: SeparatorProps) => (
  <S.Wrapper
    aria-orientation="horizontal"
    role="separator"
    color={color}
    my={my}
    {...props}
  />
);
