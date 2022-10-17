import styled, { css } from 'styled-components';
import { HeadingProps, TSize } from '.';

const handleSizesType = (size: TSize) => {
  switch (size) {
    case 'xxs':
      return () => css`
        font-size: 1rem; /* 0.625rem -> 10px */
        line-height: 1.6rem; /* 1rem -> 16px */
      `;
    case 'xs':
      return () => css`
        font-size: 1.2rem; /* 0.75rem -> 12px */
        line-height: 1.6rem; /* 1rem -> 16px */
      `;
    case 'sm':
      return () => css`
        font-size: ${({ theme }) =>
          theme.font.size.small}; /* 0.875rem -> 14px */
        line-height: 2rem; /* 1.25rem -> 20px */
      `;
    case 'base':
      return () => css`
        font-size: ${({ theme }) => theme.font.size.medium}; /* 1rem -> 16px */
        line-height: 2.4rem; /* 1.5rem -> 24px */
      `;
    case 'lg':
      return () => css`
        font-size: 1.8rem; /* 1.125rem -> 18px */
        line-height: 2.8rem; /* 1.75rem -> 28px */
      `;
    case 'xl':
      return () => css`
        font-size: 2rem; /* 1.25rem -> 20px */
        line-height: 2.8rem; /* 1.75rem -> 28px */
      `;
    case '2xl':
      return () => css`
        font-size: 2.4rem; /* 1.5rem -> 24px */
        line-height: 3.2rem; /* 2rem -> 32px */
      `;
    case '3xl':
      return () => css`
        font-size: 3rem; /* 1.875rem -> 30px */
        line-height: 3.6rem; /* 2.25rem -> 36px */
      `;
    case '4xl':
      return () => css`
        font-size: 3.6rem; /* 2.25rem -> 36px */
        line-height: 4rem; /* 2.5rem -> 40px */
      `;
    case '5xl':
      return () => css`
        font-size: 4.8rem; /* 3rem -> 48px */
        line-height: 1;
      `;
    case '6xl':
      return () => css`
        font-size: 6rem; /* 3.75rem -> 60px */
        line-height: 1;
      `;
    case '7xl':
      return () => css`
        font-size: 7.2rem; /* 4.5rem -> 72px */
        line-height: 1;
      `;
    case '8xl':
      return () => css`
        font-size: 9.6rem; /* 6rem -> 96px */
        line-height: 1;
      `;
    case '9xl':
      return () => css`
        font-size: 12.8rem; /* 8rem -> 128px */
        line-height: 1;
      `;
    default:
      return `font-size: ${size}`;
  }
};

const titleColor = {
  white: () => css`
    color: ${({ theme }) => theme.colors.neutral_white};
  `,
  gray: () => css`
    color: ${({ theme }) => theme.colors.gray_80};
  `,
  black: () => css`
    color: ${({ theme }) => theme.colors.gray_110};
  `,
  primary: () => css`
    color: ${({ theme }) => theme.colors.primary};
  `,
};

export const Title = styled.h1<HeadingProps>`
  ${({
    color,
    size,
    textAlign,
    lineHeight,
    smSize,
    smAlign,
    uppercase,
    bold,
    m,
    mb,
    ml,
    mr,
    mt,
    mx,
    my,
  }) => css`
    font-weight: ${bold ? 'bold' : '400'};
    text-transform: ${uppercase ? 'uppercase' : 'none'};
    line-height: ${lineHeight};
    text-align: ${textAlign};
    margin: ${m};
    margin-top: ${mt || my};
    margin-right: ${mr};
    margin-bottom: ${mb || my};
    margin-left: ${ml};
    margin-inline-start: ${mx};
    margin-inline-end: ${mx};

    ${!!size && handleSizesType(size!)};
    ${titleColor[color!]()};

    @media (max-width: 640px) {
      font-size: ${smSize}; /* 0.75rem -> 12px */
      text-align: ${smAlign};
    }
  `}
`;
