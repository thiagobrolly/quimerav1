import styled, { css } from 'styled-components';
import { ButtonProps } from './index';

export const Button = styled.button<ButtonProps>`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: background 0.3s;
    border: none;
    border-radius: ${theme.border.radius.medium};
    text-decoration: none;
    width: fit-content;
    cursor: pointer;
  `}
`;
