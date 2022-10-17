import * as S from './styles';

export type ContainerProps = {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  align?:
    | 'center'
    | 'stretch'
    | 'normal'
    | 'flex-start'
    | 'flex-end'
    | 'start'
    | 'end';

  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'start'
    | 'end'
    | 'left'
    | 'right'
    | 'normal'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch';

  // Layout, width and height
  w?: 'auto' | 'fit-content' | 'max-content' | 'min-content' | string;
  h?: 'auto' | 'fit-content' | 'max-content' | 'min-content' | string;
  maxH?: 'auto' | 'fit-content' | 'max-content' | 'min-content' | string;
  minH?: 'auto' | 'fit-content' | 'max-content' | 'min-content' | string;

  // Color and background color
  color?: string;
  bg?: string;

  // Margin and padding
  m?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  mx?: string;
  my?: string;
  p?: string;
  pt?: string;
  pb?: string;
  pl?: string;
  pr?: string;
  px?: string;
  py?: string;

  gap?: string;

  borderRadius?: boolean;
  boxShadow?: boolean;

  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export function Container({ children, ...props }: ContainerProps) {
  return <S.Wrapper {...props}>{children}</S.Wrapper>;
}
