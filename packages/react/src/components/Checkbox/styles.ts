import styled, { css } from 'styled-components';
import { CheckboxProps } from '.';

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  border-radius: 0.2rem;
  transition: ${({ theme }) => theme.transition.default};
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  width: 1.8rem;
  height: 1.8rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.gray_80};
  border-radius: ${({ theme }) => theme.border.radius.xsmall};
  position: relative;
  outline: none;
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 0px 1px ${({ theme }) => theme.colors.primary};
  }

  &::before {
    content: '';
    width: 3px;
    height: 18px;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 7px;
    border-top-left-radius: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transform: rotate(42deg) scale(0);
    position: absolute;
    top: -5px;
    left: 12px;
    opacity: ${({ theme }) => theme.opacity.zero};
    transition: 0.2s ease-in-out;
  }

  &::after {
    content: '';
    width: 3px;
    height: 9px;
    border-bottom-left-radius: 5px;
    border-top-right-radius: 5px;
    background: ${({ theme }) => theme.colors.primary};
    transform: rotate(140deg);
    position: absolute;
    top: 3px;
    left: 4px;
    opacity: ${({ theme }) => theme.opacity.zero};
    transition: 0.2s ease-in-out;
  }

  &:disabled,
  &:disabled + label {
    cursor: not-allowed;
    border-color: ${({ theme }) => theme.colors.gray_70};
    color: ${({ theme }) => theme.colors.gray_70};
  }

  &:checked {
    border-color: ${({ theme }) => theme.colors.primary};

    &:before {
      opacity: ${({ theme }) => theme.opacity.normal};
      transform: rotate(42deg) scale(1);
    }

    &:after {
      opacity: ${({ theme }) => theme.opacity.normal};
    }
  }

  &:checked + label {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Label = styled.label<Pick<CheckboxProps, 'labelColor'>>`
  ${({ labelColor, theme }) => css`
    color: ${labelColor || theme.colors.neutral_black};
    padding-left: ${theme.spacings.xxsmall};
    line-height: 1.8rem;
    cursor: pointer;
  `}
`;
