import styled, { css } from 'styled-components';

export const Paragraph = styled.h1`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray_100};
  `}
  font-size: ${({ theme }) => theme.font.size.medium};
`;
