import styled, { css } from 'styled-components';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

type TooltipContentProps = {
  tooltipColor?: string;
  tooltipSize?: string;
};

export const Trigger = styled(TooltipPrimitive.Trigger)`
  border: 0;
  width: fit-content;
  background: none;
  cursor: pointer;
`;

export const Content = styled(TooltipPrimitive.Content)<TooltipContentProps>`
  ${({ theme, tooltipColor, tooltipSize }) => css`
    border-radius: ${theme.border.radius.small};
    box-shadow: ${theme.shadow.base};
    background-color: ${tooltipColor || theme.colors.white};
    width: ${tooltipSize || 'auto'};
    padding: 10px;
    color: ${theme.colors.black};
  `}
`;

export const Arrow = styled(TooltipPrimitive.Arrow)<TooltipContentProps>`
  fill: ${({ tooltipColor, theme }) => tooltipColor || theme.colors.white};
`;
