import styled, { css } from 'styled-components';
import { SpinnerProps } from './index';

export const Wrapper = styled.div<SpinnerProps>`
  ${({ m, mb, ml, mr, mt, mx, my }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    margin: ${m};
    margin-top: ${mt || my};
    margin-right: ${mr};
    margin-bottom: ${mb || my};
    margin-left: ${ml};
    margin-inline-start: ${mx};
    margin-inline-end: ${mx};
  `}
`;
