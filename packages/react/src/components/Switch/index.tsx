import { InputHTMLAttributes } from 'react';
import * as S from './styles';

export const Switch = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => (
  <S.Switch type="checkbox" {...props} />
);
