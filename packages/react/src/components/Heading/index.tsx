import React from 'react';
import * as Styled from './styles';

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

export type HeadingProps = {
  children: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: TSize;
  smSize?: string;
  lineHeight?: string;
  textAlign?: 'left' | 'right' | 'center' | 'justify' | 'start' | 'end';
  smAlign?: 'left' | 'right' | 'center' | 'justify' | 'start' | 'end';
  color?: 'white' | 'gray' | 'black' | 'primary';
  bold?: boolean;
  uppercase?: boolean;
  m?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  mx?: string;
  my?: string;
} & React.HTMLAttributes<HTMLElement>;

export const Heading = ({
  children,
  as = 'h1',
  size,
  uppercase = false,
  bold = false,
  color = 'black',
  lineHeight,
  ...props
}: HeadingProps) => {
  return (
    <Styled.Title
      as={as}
      size={size}
      uppercase={uppercase}
      bold={bold}
      color={color}
      lineHeight={lineHeight}
      {...props}
    >
      {children}
    </Styled.Title>
  );
};
