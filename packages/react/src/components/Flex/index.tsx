import * as S from './styles';

export type FlexProps = {
  as?: React.ElementType;
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  grow?: number;
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
  maxW?: 'auto' | 'fit-content' | 'max-content' | 'min-content' | string;
  minW?: 'auto' | 'fit-content' | 'max-content' | 'min-content' | string;
  maxH?: 'auto' | 'fit-content' | 'max-content' | 'min-content' | string;
  minH?: 'auto' | 'fit-content' | 'max-content' | 'min-content' | string;
  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto';
  overflowX?: 'visible' | 'hidden' | 'scroll' | 'auto';
  overflowY?: 'visible' | 'hidden' | 'scroll' | 'auto';

  // Color and background color
  color?: string;
  bg?: string;
  opacity?: 'zero' | 'high' | 'medium' | 'low' | 'normal';

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

  positon?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';
  border?: string;
  borderRadius?: 'small' | 'medium' | 'large' | 'circle';
  borderRadiusTop?: string;
  borderRadiusBottom?: string;
  borderRadiusRight?: string;
  borderRadiusLeft?: string;
  zIndex?:
    | 'hide'
    | 'auto'
    | 'base'
    | 'dropdown'
    | 'menu'
    | 'overlay'
    | 'modal'
    | 'alwayOnTop';
  boxShadow?: 'base' | 'sm' | 'md' | 'lg';

  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export function Flex({ children, ...props }: FlexProps) {
  return <S.Wrapper {...props}>{children}</S.Wrapper>;
}
