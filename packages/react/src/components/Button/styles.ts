import styled, { css } from 'styled-components';
import { shade, lighten, transparentize } from 'polished';
import { ButtonProps } from './index';

const buttonModifiers = {
  small: () => css`
    ${({ theme }) => css`
      height: 3.2rem;
      font-size: ${theme.font.size.xsmall};
      padding: 0px ${theme.spacings.xsmall};
      border-radius: ${theme.border.radius.small};

      svg {
        width: ${theme.font.size.xsmall};
      }
    `}
  `,

  medium: () => css`
    ${({ theme }) => css`
      height: 4rem;
      font-size: ${theme.font.size.small};
      padding: 0px ${theme.spacings.xsmall};

      svg {
        width: ${theme.font.size.small};
      }
    `}
  `,

  large: () => css`
    ${({ theme }) => css`
      height: 4.8rem;
      font-size: ${theme.font.size.medium};
      padding: 0px ${theme.spacings.medium};

      svg {
        width: ${theme.font.size.medium};
      }
    `}
  `,

  fullSize: () => css`
    width: 100%;
  `,
};

const buttonTheme = {
  standard: () => css`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};

    &:not([disabled]):hover {
      background: ${({ theme }) => transparentize(0.9, theme.colors.primary)};
    }

    &:not([disabled]):active {
      background: ${({ theme }) => lighten(0.3, theme.colors.primary)};
    }
  `,

  filled: () => css`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};

    &:not([disabled]):hover {
      background: ${({ theme }) => shade(0.2, theme.colors.primary)};
    }

    &:not([disabled]):active {
      background: ${({ theme }) => shade(0.3, theme.colors.primary)};
    }
  `,

  outline: () => css`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: inset 0px 0px 0px 2px ${({ theme }) => theme.colors.primary};

    &:not([disabled]):hover {
      background: ${({ theme }) => transparentize(0.9, theme.colors.primary)};
    }

    &:not([disabled]):active {
      background: ${({ theme }) => lighten(0.3, theme.colors.primary)};
    }
  `,

  approve: () => css`
    background: ${({ theme }) => theme.colors.green_80};
    color: ${({ theme }) => theme.colors.white};

    &:not([disabled]):hover {
      background: ${({ theme }) => shade(0.2, theme.colors.green_80)};
    }

    &:not([disabled]):active {
      background: ${({ theme }) => shade(0.3, theme.colors.green_80)};
    }
  `,

  danger: () => css`
    background: ${({ theme }) => theme.colors.red_100};
    color: ${({ theme }) => theme.colors.white};

    &:not([disabled]):hover {
      background: ${({ theme }) => shade(0.2, theme.colors.red_100)};
    }

    &:not([disabled]):active {
      background: ${({ theme }) => shade(0.3, theme.colors.red_100)};
    }
  `,
};
export const ButtonLabel = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const ButtonLoading = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    stroke: currentColor;
  }
`;

export const Button = styled.button<ButtonProps>`
  ${({
    variant,
    size,
    m,
    mb,
    ml,
    mr,
    mt,
    mx,
    my,
    disabled,
    theme,
    isLoading,
    fullSize,
    as,
  }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.xsmall};
    font-weight: ${theme.font.weight.semiBold};
    text-align: center;
    transition: background 0.3s;
    border: none;
    border-radius: ${theme.border.radius.medium};
    text-decoration: none;
    width: fit-content;
    margin: ${m};
    margin-top: ${mt || my};
    margin-right: ${mr};
    margin-bottom: ${mb || my};
    margin-left: ${ml};
    margin-inline-start: ${mx};
    margin-inline-end: ${mx};
    cursor: pointer;
    ${buttonTheme[variant!]()}
    ${buttonModifiers[size!]()}
    ${!!fullSize && buttonModifiers.fullSize()}

    svg {
      fill: currentColor;
    }

    ${isLoading &&
    css`
      ${ButtonLabel} {
        visibility: hidden;
      }
    `}

    ${!!disabled &&
    css`
      cursor: not-allowed;
      opacity: 50%;

      span {
        pointer-events: none;
      }
    `}

    ${!!disabled &&
    as &&
    css`
      pointer-events: none;
    `}
  `}

  ${({ maintainDimentions }) =>
    !maintainDimentions &&
    css`
      @media (max-width: 768px) {
        ${buttonModifiers.medium}
      }

      @media (max-width: 480px) {
        ${buttonModifiers.small}
      }
    `}
`;
