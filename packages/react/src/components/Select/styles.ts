import styled, { css, keyframes } from 'styled-components';
import { Content, Item, Trigger } from '@radix-ui/react-dropdown-menu';
import { SelectProps } from '.';

type SelectContainerProps = Pick<
  SelectProps,
  | 'success'
  | 'disabled'
  | 'flex'
  | 'w'
  | 'maxW'
  | 'minW'
  | 'm'
  | 'mt'
  | 'mb'
  | 'ml'
  | 'mr'
  | 'mx'
  | 'my'
> & {
  error?: boolean;
  isOpen?: boolean;
};

type PlaceHolderProps = {
  position: boolean;
};

export const MenuItem = styled(Item)`
  padding: 0.5rem 1.4rem;
  cursor: pointer;

  :hover,
  :focus {
    background-color: #9fc3f870;
    outline: none;
  }

  &[aria-selected='true'] {
    background-color: ${({ theme }) => theme.colors.primary};

    :hover,
    :focus {
      background-color: #7092f5;
      outline: none;
    }
  }
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.colors.red_100};
  font-size: ${({ theme }) => theme.font.size.xsmall};
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
`;

export const ClearButton = styled.button`
  position: absolute;
  width: 25px;
  height: 25px;
  right: 30px;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  z-index: 35;
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 5px;
  height: min-content;

  span {
    background-color: ${({ theme }) => theme.colors.gray_40};
    padding: 2px 4px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    z-index: 35;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.5rem;
    cursor: pointer;
    border: none;
    width: 15px;
    height: 15px;
    padding: 0.4rem;
    border-radius: 50%;
  }
`;

export const PlaceHolder = styled.p`
  color: ${({ theme }) => theme.colors.gray_80};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s linear;
  z-index: ${({ theme }) => theme.layers.base};
  pointer-events: none;
  user-select: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: calc(100% - 45px);
  align-items: center;
  justify-content: flex-start;
`;

export const Visible = styled.div<{ visibility?: boolean }>`
  max-width: calc(100% - 50px);
  overflow: overlay;
  position: absolute;
  left: 14px;
  height: 90%;
  visibility: ${({ visibility }) => (visibility ? 'visible' : 'hidden')};
  display: flex;
  align-items: center;
`;

export const Input = styled.div`
  color: ${({ theme }) => theme.colors.neutral_black};
  flex: 1;
  height: 100%;
  padding-left: 1.4rem;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const ArrowButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  transition: 0.4s;
  cursor: pointer;
`;

export const TriggerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
`;

export const TriggerContent = styled(Trigger)`
  &[data-state='open'] {
    ${ArrowButton} {
      transform: rotate(180deg);
    }
  }
`;

export const TriggerButton = styled.div<PlaceHolderProps>`
  display: flex;
  border-radius: 0.8rem;
  width: 100%;
  height: 100%;
  position: relative;
  outline: none;
  border: none;

  ${PlaceHolder} {
    top: ${({ position }) => (position ? '18px' : '-10px')};
    font-weight: ${({ position }) => !position && '600'};
    font-size: ${({ position }) => (position ? '1.4rem' : '1.2rem')};
  }

  &:hover {
    fieldset {
      border-width: 2px;
      border-color: ${({ theme }) => theme.colors.neutral_black};
    }
  }

  fieldset {
    text-align: left;
    position: absolute;
    bottom: 0;
    right: 0;
    top: -5px;
    left: 0;
    margin: 0;
    padding: 0 8px;
    pointer-events: none;
    border-radius: inherit;
    border-style: solid;
    border-width: 1px;
    overflow: hidden;
    border-color: ${({ theme }) => theme.colors.gray_70};
    transition: border-color 0.2s;
  }

  legend {
    overflow: hidden;
    display: block;
    height: 11px;
    font-size: 1.2rem;
    visibility: hidden;
    max-width: ${({ position }) => (position ? '0.01px' : '100%')};
    transition: max-width 50ms cubic-bezier(0, 0, 0.2, 1) 0ms;

    span {
      padding-left: 5px;
      padding-right: 5px;
      display: inline-block;
      opacity: 0;
      visibility: visible;
    }
  }
`;

export const MenuContainer = styled.div`
  > div {
    width: 100%;
    position: absolute !important;
  }
`;

const slideUpAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
}
`;

const slideDownAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
}
`;

export const MenuContent = styled(Content)`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: auto;
  max-height: 200px;
  background: ${({ theme }) => theme.colors.content};
  color: ${({ theme }) => theme.colors.neutral_black};
  z-index: ${({ theme }) => theme.layers.modal};
  animation-duration: 0.4s;

  &[data-state='open'] {
    &[data-side='top'] {
      animation-name: ${slideDownAndFade};
    }
    &[data-side='bottom'] {
      animation-name: ${slideUpAndFade};
    }
  }
`;

const selectModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(4px);
  `,

  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(0);
  `,

  success: () => css`
    ${TriggerButton} {
      &:hover {
        fieldset {
          border-color: ${({ theme }) => theme.colors.green_80} !important;
        }
      }

      input {
        &:focus + fieldset {
          border-color: ${({ theme }) => theme.colors.green_80};
        }
      }

      fieldset {
        border-color: ${({ theme }) => theme.colors.green_80} !important;
      }

      ${PlaceHolder} {
        color: ${({ theme }) => theme.colors.green_80} !important;
      }

      ${ArrowButton} {
        svg {
          fill: ${({ theme }) => theme.colors.green_80} !important;
        }
      }
    }
  `,

  error: () => css`
    ${TriggerButton} {
      &:hover {
        fieldset {
          border-color: ${({ theme }) => theme.colors.red_100} !important;
        }
      }

      input {
        &:focus + fieldset {
          border-color: ${({ theme }) => theme.colors.red_100};
        }
      }

      fieldset {
        border-color: ${({ theme }) => theme.colors.red_100} !important;
      }

      ${PlaceHolder} {
        color: ${({ theme }) => theme.colors.red_100} !important;
      }

      ${ArrowButton} {
        svg {
          fill: ${({ theme }) => theme.colors.red_100} !important;
        }
      }
    }
  `,

  disabled: () => css`
    cursor: not-allowed;

    ${TriggerButton} {
      pointer-events: none;
      background-color: ${({ theme }) => theme.colors.gray_70};
      color: ${({ theme }) => theme.colors.gray_90};

      fieldset {
        border-color: transparent !important;
      }

      ${PlaceHolder} {
        color: ${({ theme }) => theme.colors.gray_90} !important;
      }

      ${ArrowButton} {
        svg {
          fill: ${({ theme }) => theme.colors.gray_90} !important;
        }
      }
    }
  `,
};

export const SelectContainer = styled.div<SelectContainerProps>`
  ${({
    error,
    disabled,
    success,
    flex,
    w,
    maxW,
    minW,
    m,
    mb,
    ml,
    mr,
    mt,
    mx,
    my,
  }) => css`
    position: relative;
    outline: none;
    flex: ${flex};
    width: ${w || '100%'};
    max-width: ${maxW};
    min-width: ${minW || '120px'};
    margin: ${m};
    margin-top: ${mt || my};
    margin-right: ${mr};
    margin-bottom: ${mb || my};
    margin-left: ${ml};
    margin-inline-start: ${mx};
    margin-inline-end: ${mx};
    ${!!success && selectModifiers.success()}
    ${!!error && selectModifiers.error()}
    ${!!disabled && selectModifiers.disabled()}
  `}

  &:focus-within {
    ${PlaceHolder} {
      color: ${({ theme }) => theme.colors.primary};
    }

    fieldset {
      border-width: 2px;
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
