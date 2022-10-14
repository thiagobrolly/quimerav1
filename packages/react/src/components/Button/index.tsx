import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <S.Button type="button" {...props}>
      {children}
    </S.Button>
  );
};
