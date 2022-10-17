import styled, { css } from 'styled-components';
import { TextFieldProps } from '.';

type IconProps = Pick<TextFieldProps, 'iconLeft' | 'variant'>;

type WrapperProps = Pick<
  TextFieldProps,
  | 'variant'
  | 'disabled'
  | 'success'
  | 'flex'
  | 'w'
  | 'maxW'
  | 'minW'
  | 'm'
  | 'mb'
  | 'ml'
  | 'mr'
  | 'mt'
  | 'mx'
  | 'my'
> & {
  error?: boolean;
};

export const IconLeft = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.3rem;
    color: ${theme.colors.gray_80};
    margin: 0 10px;
    z-index: ${theme.layers.base};
  `}
`;

export const IconRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.3rem;
  color: ${({ theme }) => theme.colors.gray_80};
  margin: 0 10px;
  z-index: ${({ theme }) => theme.layers.base};
  margin-left: auto;
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.colors.red_100};
  font-size: ${({ theme }) => theme.font.size.xsmall};
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
`;

export const Label = styled.label<IconProps>`
  font-size: ${({ theme }) => theme.font.size.small};
  color: ${({ theme }) => theme.colors.gray_80};
  position: absolute;
  top: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s linear;
  z-index: ${({ theme }) => theme.layers.base};
  pointer-events: none;

  ${({ variant, iconLeft }) =>
    variant === 'standard'
      ? css`
          left: ${iconLeft ? '4.5rem' : '0.5rem'};
        `
      : css`
          left: ${iconLeft ? '4.5rem' : '1.4rem'};
        `}
`;

export const InputContainer = styled.div`
  display: flex;
  border-radius: 0.8rem;
  height: 56px;
  position: relative;

  &:focus-within ${IconLeft}, &:focus-within ${IconRight} {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Input = styled.input<TextFieldProps>`
  flex: 1;
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.neutral_black};
  outline: none;
  font-size: ${({ theme }) => theme.font.size.medium};
  width: 100%;
  height: 100%;
  position: absolute;
  padding-top: 1.2rem;
  padding-right: ${({ iconRight, type }) =>
    iconRight || type === 'search' ? '4.5rem' : '1.4rem'};

  ${({ variant, iconLeft }) =>
    variant === 'standard'
      ? css`
          padding-left: ${iconLeft ? '4.5rem' : '0.5rem'};
        `
      : css`
          padding-left: ${iconLeft ? '4.5rem' : '1.4rem'};
        `}

  // hide eye password Microsoft Edge
  ::-ms-reveal {
    display: none;
  }

  ::placeholder {
    color: transparent;
  }

  &:-webkit-autofill {
    box-shadow: 0 0 0 30px #e1faff inset;
    transition: background-color 5000s ease-in-out 0s;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
`;

const wrapperModifiers = {
  error: () => css`
    ${InputContainer} {
      &:after {
        border-bottom-color: ${({ theme }) => theme.colors.red_100};
      }

      &:before {
        border-color: ${({ theme }) => theme.colors.red_100};
      }

      &:hover {
        fieldset {
          border-color: ${({ theme }) => theme.colors.red_100};
        }

        &:before {
          border-color: ${({ theme }) => theme.colors.red_100};
        }
      }

      &:focus-within {
        &:before {
          border-color: ${({ theme }) => theme.colors.red_100};
        }
        &:after {
          border-color: ${({ theme }) => theme.colors.red_100};
        }
      }

      input {
        &:focus + fieldset {
          border-color: ${({ theme }) => theme.colors.red_100};
        }
      }

      fieldset {
        border-color: ${({ theme }) => theme.colors.red_100};
      }

      ${Label}, ${IconLeft},  ${IconRight} {
        color: ${({ theme }) => theme.colors.red_100} !important;
      }
    }
  `,

  success: () => css`
    ${InputContainer} {
      &:before {
        border-color: ${({ theme }) => theme.colors.green_80};
      }

      &:after {
        border-bottom-color: ${({ theme }) => theme.colors.green_80};
      }

      &:hover {
        fieldset {
          border-color: ${({ theme }) => theme.colors.green_80};
        }

        &:before {
          border-color: ${({ theme }) => theme.colors.green_80};
        }
      }

      &:focus-within {
        &:before {
          border-color: ${({ theme }) => theme.colors.green_80};
        }
        &:after {
          border-color: ${({ theme }) => theme.colors.green_80};
        }
      }

      input {
        &:focus + fieldset {
          border-color: ${({ theme }) => theme.colors.green_80};
        }
      }

      fieldset {
        border-color: ${({ theme }) => theme.colors.green_80};
      }

      ${Label}, ${IconLeft},  ${IconRight} {
        color: ${({ theme }) => theme.colors.green_80} !important;
      }
    }
  `,
};

const variantDisabled = {
  outlined: () => css`
    ${InputContainer} {
      pointer-events: none;
      color: ${({ theme }) => theme.colors.gray_70};

      fieldset {
        border-color: ${({ theme }) => theme.colors.gray_70};
      }

      input,
      label,
      ${IconLeft}, ${IconRight} {
        color: ${({ theme }) => theme.colors.gray_70};
      }
    }
  `,

  filled: () => css`
    ${InputContainer} {
      background-color: ${({ theme }) => theme.colors.gray_70};
      pointer-events: none;
      color: ${({ theme }) => theme.colors.gray_90};

      input,
      label,
      ${IconLeft}, ${IconRight} {
        color: ${({ theme }) => theme.colors.gray_90};
      }
    }
  `,

  standard: () => css`
    ${InputContainer} {
      pointer-events: none;
      color: ${({ theme }) => theme.colors.gray_70};

      input,
      label,
      ${IconLeft}, ${IconRight} {
        color: ${({ theme }) => theme.colors.gray_70};
      }
    }
  `,
};

const variantInput = {
  outlined: () => css`
    ${InputContainer} {
      margin-top: 0.5rem;

      &:hover {
        fieldset {
          border-width: 2px;
          border-color: ${({ theme }) => theme.colors.neutral_black};
        }
      }

      input {
        padding-top: 0rem;

        &:-webkit-autofill {
          border-radius: 8px;
        }

        &:focus + fieldset {
          border-width: 2px;
          border-color: ${({ theme }) => theme.colors.primary};

          legend {
            max-width: 100%;
          }
        }

        &:-webkit-autofill ~ label {
          top: -8px;
        }

        &:focus ~ label {
          top: -8px;
          left: 1.4rem;
          color: ${({ theme }) => theme.colors.primary};
          transition: all 0.2s;
          font-size: 1.2rem;
        }

        &:not(:placeholder-shown) ~ label {
          top: -8px;
          left: 1.4rem;
          transition: all 0.2s;
          font-size: 1.2rem;
        }

        &:not(:placeholder-shown) + fieldset {
          legend {
            max-width: 100%;
            font-size: 1.2rem;
          }
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
        max-width: 0.01px;
        transition: max-width 50ms cubic-bezier(0, 0, 0.2, 1) 0ms;

        span {
          padding-left: 5px;
          padding-right: 5px;
          display: inline-block;
          opacity: 0;
          visibility: visible;
        }
      }
    }
  `,

  filled: () => css`
    ${InputContainer} {
      background: ${({ theme }) => theme.colors.gray_30};
      border-radius: 0;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      transition: all 0.2s;

      &:before {
        content: '';
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray_110};
        left: 0;
        bottom: 0;
        position: absolute;
        right: 0;
        pointer-events: none;
        z-index: 1;
        transition: all 0.2s;
      }

      &:after {
        content: '';
        border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
        left: 0;
        bottom: 0;
        position: absolute;
        right: 0;
        transform: scaleX(0);
        transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
        pointer-events: none;
      }

      &:hover {
        background: ${({ theme }) => theme.colors.gray_40};

        &:before {
          border-bottom: 2px solid ${({ theme }) => theme.colors.gray_110};
        }
      }

      &:focus-within {
        &:before {
          border-bottom: 0px;
        }
        &:after {
          transform: scaleX(1) translateX(0);
        }
      }

      input {
        &:focus ~ label {
          top: 5px;
          color: ${({ theme }) => theme.colors.primary};
          transition: all 0.2s;
          font-weight: 600;
          font-size: 1.2rem;
        }

        &:not(:placeholder-shown) ~ label {
          top: 5px;
          transition: all 0.2s;
          font-weight: 600;
          font-size: 1.2rem;
        }
      }
    }
  `,

  standard: () => css`
    ${InputContainer} {
      background: transparent;
      border-radius: 0;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;

      &:before {
        content: ' ';
        position: absolute;
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray_110};
        left: 0;
        bottom: 0;
        right: 0;
        transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        pointer-events: none;
        z-index: 1;
        transition: all 0.2s;
      }

      &:after {
        content: '';
        border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
        left: 0;
        bottom: 0;
        position: absolute;
        right: 0;
        transform: scaleX(0);
        transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
        pointer-events: none;
      }

      &:hover {
        &:before {
          border-bottom: 2px solid ${({ theme }) => theme.colors.gray_110};
        }
      }

      &:focus-within {
        &:before {
          border-bottom: 0px;
        }
        &:after {
          transform: scaleX(1) translateX(0);
        }
      }

      input {
        & ~ label {
          top: 22px;
        }

        &:focus ~ label {
          top: 5px;
          color: ${({ theme }) => theme.colors.primary};
          transition: all 0.2s;
          font-weight: 600;
          font-size: 1.2rem;
        }

        &:not(:placeholder-shown) ~ label {
          top: 5px;
          transition: all 0.2s;
          font-weight: 600;
          font-size: 1.2rem;
        }
      }
    }
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;

  /* clears the 'X' from Internet Explorer */
  input[type='search']::-ms-clear,
  input[type='search']::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }

  /* clears the 'X' from Chrome */
  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    display: none;
  }

  ${({
    disabled,
    variant,
    error,
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
    ${variantInput[variant!]()}
    ${disabled && variantDisabled[variant!]()}
    ${!!error && wrapperModifiers.error()}
    ${!!success && wrapperModifiers.success()}
  `}
`;
