import styled, { css } from 'styled-components';
import * as PopoverPrimitive from '@radix-ui/react-popover';

export interface TooltipProps {
  colorContent?: string;
}

export const Trigger = styled(PopoverPrimitive.Trigger)`
  border: 0;
  width: fit-content;
  background: none;
  cursor: pointer;
`;

export const Content = styled(PopoverPrimitive.Content)<TooltipProps>`
  ${({ theme, colorContent }) => css`
    border-radius: ${theme.border.radius.small};
    box-shadow: ${theme.shadow.base};
    background-color: ${colorContent || theme.colors.white};
    color: ${theme.colors.black};
    padding: 10px;
  `}
`;

export const Arrow = styled(PopoverPrimitive.Arrow)<TooltipProps>`
  fill: ${({ colorContent, theme }) => colorContent || theme.colors.white};
`;
