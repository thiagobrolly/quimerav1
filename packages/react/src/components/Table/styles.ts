import styled, { css } from 'styled-components';
import {
  TableContainerProps,
  TableProps,
  TdProps,
  TFooterProps,
  THeadProps,
  ThProps,
} from '.';

export const TBody = styled.tbody`
  tr {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray_40};
  }

  tr:last-child {
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray_50};
  }
`;

export const Tr = styled.tr`
  td:last-child {
    border-bottom: none;
  }
`;

export const Th = styled.th<ThProps>`
  padding: 1rem;

  ${({ w, h, align }) => css`
    width: ${w};
    height: ${h};
    text-align: ${align || 'left'};
  `}
`;

export const Td = styled.td<TdProps>`
  padding: 1rem;

  ${({ w, h, align }) => css`
    width: ${w};
    height: ${h};
    text-align: ${align || 'left'};
  `}
`;

export const TableCaption = styled.caption`
  padding: 1rem;
  text-align: center;
`;

export const THead = styled.thead<THeadProps>`
  text-transform: uppercase;
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.layers.base};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_40};

  ${({ color, bg, theme }) => css`
    color: ${color || theme.colors.neutral_black};
    background: ${bg || theme.colors.gray_30};
  `}

  ${Th} {
    &:first-child {
      border-top-left-radius: 8px;
    }

    &:last-child {
      border-top-right-radius: 8px;
    }
  }
`;

export const TFoot = styled.tfoot<TFooterProps>`
  text-transform: uppercase;

  ${({ color, bg, theme }) => css`
    color: ${color || theme.colors.neutral_black};
    background: ${bg || theme.colors.gray_30};
  `}

  ${Th} {
    &:first-child {
      border-bottom-left-radius: 8px;
    }

    &:last-child {
      border-bottom-right-radius: 8px;
    }
  }
`;

export const Table = styled.table<TableProps>`
  border-collapse: collapse;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.neutral_black};
  background: ${({ theme }) => theme.colors.content};

  ${({ striped }) =>
    striped &&
    css`
      tr:nth-of-type(even) {
        background-color: ${({ theme }) => theme.colors.gray_30};
      }
    `}
`;

export const TableContainer = styled.div<TableContainerProps>`
  display: block;
  overflow-x: auto;
  overflow-y: auto;
  white-space: nowrap;
  width: ${({ w }) => w || '100%'};
  height: ${({ h }) => h || 'auto'};
  border-radius: 8px;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);

  ${({ screen }) =>
    css`
      @media screen and (max-width: ${screen ? `${screen[0]}px` : '768px'}) {
        white-space: normal;

        table.paylivre-table .paylivre-table__caption {
          font-size: ${({ theme }) => theme.font.size.small};
        }

        table.paylivre-table thead,
        table.paylivre-table tfoot {
          display: none;
        }

        table.paylivre-table tr {
          border-bottom: 3px solid ${({ theme }) => theme.colors.gray_50};
          display: block;
          margin-bottom: 2rem;

          td:last-child {
            border-bottom: none;
          }
        }

        table.paylivre-table td {
          display: block;
          width: 100%;
          font-size: ${({ theme }) => theme.font.size.small};
          text-align: right;
          border-bottom: 1px solid ${({ theme }) => theme.colors.gray_50};
        }

        table.paylivre-table td::before {
          content: attr(data-label);
          float: left;
          font-weight: bold;
          text-transform: uppercase;
        }
      }
    `}

  ${({ screen }) =>
    css`
      @media screen and (max-width: ${screen ? `${screen[1]}px` : '480px'}) {
        table.paylivre-table td {
          font-size: ${({ theme }) => theme.font.size.xsmall};
        }
      }
    `}
`;
