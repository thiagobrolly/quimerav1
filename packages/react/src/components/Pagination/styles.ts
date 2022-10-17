import styled, { css } from 'styled-components';

interface PaginationItemProps {
  isCurrent?: boolean;
  isDisabled?: boolean;
}

interface PrevNextProps {
  isDisabled?: boolean;
}

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

export const PaginationItem = styled.button<PaginationItemProps>`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.gray_100};
  padding: 1.5rem;

  &:hover {
    background: ${({ theme }) => theme.colors.gray_40};
  }

  ${({ isCurrent }) =>
    isCurrent &&
    css`
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
      font-weight: bold;
      padding: 1.8rem;

      pointer-events: none;
    `}

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      background: ${({ theme }) => theme.colors.gray_40};
      color: ${({ theme }) => theme.colors.gray_60};
      pointer-events: none;
    `}
`;

export const PaginationItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > span {
    color: ${({ theme }) => theme.colors.gray_100};
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.neutral_black};
`;

export const NextPrev = styled.span<PrevNextProps>`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  transition: 0.35s;
  cursor: pointer;

  &:hover {
    svg {
      fill: ${({ theme }) => theme.colors.white};
    }
    background: ${({ theme }) => theme.colors.primary};
  }

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      background: ${({ theme }) => theme.colors.gray_40};
      border: 2px solid transparent;
      pointer-events: none;

      svg {
        fill: ${({ theme }) => theme.colors.gray_60};
      }
    `}
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;

    ${Pagination} {
      gap: 1rem;
    }

    ${PaginationItemContainer} {
      gap: 0.2rem;
    }

    ${PaginationItem} {
      font-size: 1.4rem;
    }
  }
`;
