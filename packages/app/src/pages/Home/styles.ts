import styled, { css } from 'styled-components';
import { colors } from '@quimera-ui/tokens';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
  background-color: ${colors.gray_120};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 7%);
  color: ${colors.white};
`;
