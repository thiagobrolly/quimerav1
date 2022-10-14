import styled from 'styled-components';

export const Switch = styled.input`
  width: 40px;
  height: 20px;
  appearance: none;
  background-color: ${({ theme }) => theme.colors.gray_40};
  border-radius: 50px;
  box-shadow: inset 0px 0px 16px 1px rgba(0, 0, 0, 0.24);
  transition: 0.4s;
  position: relative;
  cursor: pointer;

  &:before {
    content: '';
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    position: absolute;
    box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.25);
    transform: scale(1.1);
    top: 0;
    left: 0;
    bottom: 0;
    transition: 0.4s;
  }

  &:checked {
    background-color: ${({ theme }) => theme.colors.gray_20};

    &:before {
      left: 20px;
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }

  &:disabled {
    pointer-events: none;
    background-color: ${({ theme }) => theme.colors.gray_20};

    &:before {
      background-color: ${({ theme }) => theme.colors.gray_20};
    }
  }
`;
