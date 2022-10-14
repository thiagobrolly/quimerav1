import styled, { css } from 'styled-components';
import { FlexProps } from '.';

const opacityModifiers = {
  zero: () => css`
    opacity: ${({ theme }) => theme.opacity.zero};
  `,
  high: () => css`
    opacity: ${({ theme }) => theme.opacity.high};
  `,
  medium: () => css`
    opacity: ${({ theme }) => theme.opacity.medium};
  `,
  low: () => css`
    opacity: ${({ theme }) => theme.opacity.low};
  `,
  normal: () => css`
    opacity: ${({ theme }) => theme.opacity.normal};
  `,
};

const borderRadiusModifiers = {
  small: () => css`
    border-radius: ${({ theme }) => theme.border.radius.small};
  `,
  medium: () => css`
    border-radius: ${({ theme }) => theme.border.radius.medium};
  `,
  large: () => css`
    border-radius: ${({ theme }) => theme.border.radius.large};
  `,
  circle: () => css`
    border-radius: ${({ theme }) => theme.border.radius.circle};
  `,
};

const boxShadowModifiers = {
  base: () => css`
    box-shadow: ${({ theme }) => theme.shadow.base};
  `,
  sm: () => css`
    box-shadow: ${({ theme }) => theme.shadow.sm};
  `,
  md: () => css`
    box-shadow: ${({ theme }) => theme.shadow.md};
  `,
  lg: () => css`
    box-shadow: ${({ theme }) => theme.shadow.lg};
  `,
};

const zIndexModifiers = {
  hide: () => css`
    z-index: ${({ theme }) => theme.layers.hide};
  `,
  auto: () => css`
    z-index: ${({ theme }) => theme.layers.auto};
  `,
  base: () => css`
    z-index: ${({ theme }) => theme.layers.base};
  `,
  dropdown: () => css`
    z-index: ${({ theme }) => theme.layers.dropdown};
  `,
  menu: () => css`
    z-index: ${({ theme }) => theme.layers.menu};
  `,
  overlay: () => css`
    z-index: ${({ theme }) => theme.layers.overlay};
  `,
  modal: () => css`
    z-index: ${({ theme }) => theme.layers.modal};
  `,
  alwayOnTop: () => css`
    z-index: ${({ theme }) => theme.layers.alwayOnTop};
  `,
};

export const Wrapper = styled.div<FlexProps>`
  ${({
    direction,
    wrap,
    align,
    justify,
    w,
    h,
    maxW,
    minW,
    maxH,
    minH,
    m,
    mb,
    ml,
    mr,
    mt,
    mx,
    my,
    p,
    pt,
    pb,
    pl,
    pr,
    px,
    py,
    color,
    bg,
    opacity,
    positon,
    border,
    borderRadius,
    zIndex,
    boxShadow,
    borderRadiusTop,
    borderRadiusBottom,
    borderRadiusRight,
    borderRadiusLeft,
    gap,
    overflow,
    overflowX,
    overflowY,
    grow,
  }) => css`
    display: flex;
    flex-direction: ${direction};
    flex-wrap: ${wrap};
    flex-grow: ${grow};
    align-items: ${align};
    justify-content: ${justify};

    width: ${w};
    height: ${h};
    max-width: ${maxW};
    min-width: ${minW};
    max-height: ${maxH};
    min-height: ${minH};

    padding: ${p};
    padding-top: ${pt || py};
    padding-right: ${pr};
    padding-bottom: ${pb || py};
    padding-left: ${pl};
    padding-inline-start: ${px};
    padding-inline-end: ${px};

    margin: ${m};
    margin-top: ${mt || my};
    margin-right: ${mr};
    margin-bottom: ${mb || my};
    margin-left: ${ml};
    margin-inline-start: ${mx};
    margin-inline-end: ${mx};

    gap: ${gap};

    color: ${color};
    background: ${bg};

    position: ${positon};
    border: ${border};
    border: ${border};
    border-top-left-radius: ${borderRadiusTop || borderRadiusLeft};
    border-top-right-radius: ${borderRadiusTop || borderRadiusRight};
    border-bottom-right-radius: ${borderRadiusBottom || borderRadiusRight};
    border-bottom-left-radius: ${borderRadiusBottom || borderRadiusLeft};

    overflow: ${overflow};
    overflow-x: ${overflowX};
    overflow-y: ${overflowY};

    ${!!borderRadius && borderRadiusModifiers[borderRadius]}
    ${!!zIndex && zIndexModifiers[zIndex]}
    ${!!boxShadow && boxShadowModifiers[boxShadow]}
    ${!!opacity && opacityModifiers[opacity]}
  `}
`;
