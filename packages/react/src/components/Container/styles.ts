import styled, { css } from 'styled-components';
import { ContainerProps } from '.';

export const Wrapper = styled.div<ContainerProps>`
  ${({
    direction,
    wrap,
    align,
    justify,
    w,
    h,
    maxH,
    minH,
    m,
    mb,
    ml,
    mr,
    mt,
    mx,
    my,
    p,
    pt,
    pb,
    pl,
    pr,
    px,
    py,
    color,
    bg,
    borderRadius,
    boxShadow,
    gap,
    theme,
  }) => css`
    display: flex;
    flex-direction: ${direction};
    flex-wrap: ${wrap};
    align-items: ${align};
    justify-content: ${justify};

    width: ${w || '100%'};
    height: ${h || '100%'};
    max-width: 1536px;
    max-height: ${maxH};
    min-height: ${minH};

    padding: ${p || '4rem'};
    padding-top: ${pt || py};
    padding-right: ${pr};
    padding-bottom: ${pb || py};
    padding-left: ${pl};
    padding-inline-start: ${px};
    padding-inline-end: ${px};

    margin: ${m};
    margin-top: ${mt || my};
    margin-right: ${mr};
    margin-bottom: ${mb || my};
    margin-left: ${ml};
    margin-inline-start: ${mx};
    margin-inline-end: ${mx};

    gap: ${gap};

    color: ${color};
    background: ${bg || theme.colors.content};

    border-radius: ${!!borderRadius && theme.border.radius.medium};
    box-shadow: ${!!boxShadow && theme.shadow.md};

    @media (max-width: 1280px) {
      max-width: 1280px;
    }

    @media (max-width: 1024px) {
      max-width: 1024px;
    }

    @media (max-width: 768px) {
      max-width: 768px;
    }

    @media (max-width: 480px) {
      max-width: 480px;
      padding: 1.6rem 1rem;
    }

    @media (max-width: 320px) {
      max-width: 320px;
    }
  `}
`;
