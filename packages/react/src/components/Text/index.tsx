import React from 'react';
import * as S from './styles';

type TextTypes =
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
  | React.HTMLAttributes<HTMLElement>;

enum DesignSystemSizes {
  xxs = 'xxs',
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  '2xl' = '2xl',
  '3xl' = '3xl',
  '4xl' = '4xl',
  '5xl' = '5xl',
  '6xl' = '6xl',
  '7xl' = '7xl',
  '8xl' = '8xl',
  '9xl' = '9xl',
}

export type TSize =
  | `${DesignSystemSizes}`
  | `${number}px`
  | `${number}rem`
  | `${number}em`
  | `${number}%`;

type Colors = 'primary' | 'black' | 'gray' | 'white';

type LiteralUnionColors<T extends Colors, U = string> =
  | T
  | (Pick<U, never> & {
      _?: never;
    });

export type TColor = LiteralUnionColors<'primary' | 'black' | 'gray' | 'white'>;

export type TextProps = {
  children?: React.ReactNode | string;
  as?: 'p' | 'span' | 'a' | 'li' | 'em' | 'strong';
  lineHeight?: string;
  size?: TSize;
  smSize?: string;
  smAlign?: 'left' | 'right' | 'center' | 'justify' | 'start' | 'end';
  textAlign?: 'left' | 'right' | 'center' | 'justify' | 'start' | 'end';
  color?: TColor;
  bold?: boolean;
  uppercase?: boolean;
  m?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  mx?: string;
  my?: string;
} & TextTypes;

export const Text = ({
  children,
  as = 'p',
  size = 'md',
  uppercase = false,
  bold = false,
  color = 'black',
  lineHeight,
  ...props
}: TextProps) => {
  return (
    <S.Paragraph
      as={as}
      color={color}
      size={size}
      uppercase={uppercase}
      bold={bold}
      lineHeight={lineHeight}
      {...props}
    >
      {children}
    </S.Paragraph>
  );
};
