import styled, { css } from 'styled-components';
import { CardProps } from '.';

const cardModifiers = {
  small: () => css`
    min-width: 200px;
    width: fit-content;
  `,
  medium: () => css`
    min-width: 720px;
    width: fit-content;
  `,
  large: () => css`
    min-width: 980px;
    width: fit-content;
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  auto: () => css`
    width: fit-content;
  `,
};

export const Wrapper = styled.div<CardProps>`
  ${({ theme, size, m, mb, ml, mr, mt, mx, my }) => css`
    display: flex;
    flex-direction: column;
    padding: 2.4rem;
    background-color: ${theme.colors.white};
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 7%);
    border-radius: ${theme.border.radius.medium};
    margin: ${m};
    margin-top: ${mt || my};
    margin-right: ${mr};
    margin-bottom: ${mb || my};
    margin-left: ${ml};
    margin-inline-start: ${mx};
    margin-inline-end: ${mx};
    ${cardModifiers[size!]()}
  `}
`;

export const SubTitle = styled.span`
  margin-top: 0.5rem;
  font-size: ${({ theme }) => theme.font.size.medium};
  color: ${({ theme }) => theme.colors.gray_60};
`;
