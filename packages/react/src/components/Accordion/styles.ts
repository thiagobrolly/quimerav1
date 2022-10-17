import styled, { css, keyframes } from 'styled-components';
import {
  Root,
  Item,
  Header,
  Trigger,
  Content,
} from '@radix-ui/react-accordion';
import { CaretDown } from 'phosphor-react';
import { AccordionProps } from '.';

const open = keyframes`
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
`;

const close = keyframes`
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
`;

export const ChevronDownIcon = styled(CaretDown)`
  transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);

  [data-state='open'] & {
    transform: rotate(180deg);
  }
`;

export const AccordionContent = styled(Content)`
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.gray_10};
  border-top: 1px solid ${({ theme }) => theme.colors.gray_30};

  &[data-state='open'] {
    animation: ${open} 300ms ease-out forwards;
  }
  &[data-state='closed'] {
    animation: ${close} 300ms ease-out forwards;
  }
`;

export const AccordionTrigger = styled(Trigger)`
  all: unset;
  padding: 0 20px;
  height: 45px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.2s;
  cursor: pointer;

  &:not([disabled]):hover {
    background: ${({ theme }) => theme.colors.gray_20};
  }

  &[data-state='open'] {
    background: ${({ theme }) => theme.colors.gray_20};
  }
`;

export const AccordionItem = styled(Item)`
  ${({ theme }) => css`
    background: ${theme.colors.aside};

    &:first-child {
      border-top-left-radius: ${theme.border.radius.small};
      border-top-right-radius: ${theme.border.radius.small};

      ${AccordionTrigger} {
        border-top-left-radius: ${theme.border.radius.small};
        border-top-right-radius: ${theme.border.radius.small};
      }
    }

    &:last-child {
      border-bottom-left-radius: ${theme.border.radius.small};
      border-bottom-right-radius: ${theme.border.radius.small};

      ${AccordionContent}, ${AccordionTrigger} {
        border-bottom-left-radius: ${theme.border.radius.small};
        border-bottom-right-radius: ${theme.border.radius.small};
      }
    }

    &:focus-within {
      position: relative;
      z-index: ${theme.layers.base};
      box-shadow: 0 0 0 0.2rem ${theme.colors.primary};
    }

    &[data-state='open'] {
      ${AccordionTrigger} {
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
      }
    }

    &[data-disabled] {
      background: ${theme.colors.gray_40};
      color: ${theme.colors.gray_60};
      cursor: not-allowed;

      ${AccordionTrigger} {
        cursor: not-allowed;
      }

      ${ChevronDownIcon} {
        fill: ${theme.colors.gray_60};
      }
    }
  `}
`;

export const AccordionWrapper = styled(Root)<AccordionProps>`
  ${({ width, theme }) => css`
    width: ${width};
    background: transparent;
    color: ${theme.colors.neutral_black};
    border-radius: ${theme.border.radius.small};
    border: 1px solid ${theme.colors.gray_40};

    ${AccordionItem} + ${AccordionItem} {
      border-top: 1px solid ${theme.colors.gray_40};
    }
  `}
`;

export const AccordionHeader = styled(Header)`
  all: unset;
  display: flex;
`;

export const ContentHeader = styled.div`
  padding: 15px 20px;
`;
