import styled, { css } from 'styled-components';
import { SeparatorProps } from '.';

export const Wrapper = styled.div<SeparatorProps>`
  width: 100%;
  height: 0.2rem;
  border: 0;

  ${({ m, mb, ml, mr, mt, mx, my, color, theme }) => css`
    background-color: ${color || theme.colors.neutral_black};
    margin: ${m};
    margin-top: ${mt || my};
    margin-right: ${mr};
    margin-bottom: ${mb || my};
    margin-left: ${ml};
    margin-inline-start: ${mx};
    margin-inline-end: ${mx};
  `}
`;
