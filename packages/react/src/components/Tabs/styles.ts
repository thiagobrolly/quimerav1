import styled, { css } from 'styled-components';

export type TabTitleProps = {
  isActive?: boolean;
};

export type TabsProps = {
  w?: string;
  h?: string;
  maxW?: 'auto' | 'fit-content' | 'max-content' | 'min-content' | string;
  minW?: 'auto' | 'fit-content' | 'max-content' | 'min-content' | string;
  m?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  mx?: string;
  my?: string;
};

export const Wrapper = styled.div<TabsProps>`
  ${({ theme, w, h, maxW, minW, m, mb, ml, mr, mt, mx, my }) => css`
    display: flex;
    flex-direction: column;
    box-shadow: ${theme.shadow.base};
    border-radius: 8px;
    width: ${w || '100%'};
    height: ${h};
    max-width: ${maxW};
    min-width: ${minW};
    margin: ${m};
    margin-top: ${mt || my};
    margin-right: ${mr};
    margin-bottom: ${mb || my};
    margin-left: ${ml};
    margin-inline-start: ${mx};
    margin-inline-end: ${mx};
  `}
`;

export const TabTitle = styled.button<TabTitleProps>`
  ${({ isActive, theme }) => css`
    width: 100%;
    border: none;
    border-bottom: 0.3rem solid;
    border-color: ${isActive ? theme.colors.primary : theme.colors.gray_20};
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 2rem;
    padding-top: 0.3rem;
    background-color: ${theme.colors.aside};
    color: ${theme.colors.neutral_black};

    &:first-child {
      border-top-left-radius: 8px;
    }

    &:last-child {
      border-top-right-radius: 8px;
    }

    & + button {
      border-left: 0.2rem solid ${theme.colors.gray_20};
    }
  `}
`;

export const TabContent = styled.div`
  width: 100%;
  display: flex;
`;

export const TabPane = styled.div`
  padding: 20px;
  color: ${({ theme }) => theme.colors.neutral_black};
  background-color: ${({ theme }) => theme.colors.content};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
