import React from 'react';
import { Heading } from '../Heading';
import { Separator } from '../Separator';
import * as S from './styles';

export type CardProps = {
  title?: string;
  subTitle?: string;
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large' | 'fullWidth' | 'auto';
  m?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  mx?: string;
  my?: string;
} & React.HTMLAttributes<HTMLElement>;

export const Card = ({
  title = '',
  subTitle = '',
  children,
  size = 'auto',
  ...props
}: CardProps) => (
  <S.Wrapper size={size} {...props}>
    {!!title && (
      <>
        <Heading bold color="black" size="2xl">
          {title}
        </Heading>
        {!!subTitle && <S.SubTitle>{subTitle}</S.SubTitle>}
        <Separator color="#f0eff4" mb="2rem" />
      </>
    )}

    {children}
  </S.Wrapper>
);
