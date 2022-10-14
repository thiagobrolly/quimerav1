import {
  HTMLAttributes,
  TableHTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes,
} from 'react';
import * as S from './styles';

export type TableContainerProps = {
  w?: 'auto' | 'fit-content' | 'max-content' | 'min-content' | string;
  h?: 'auto' | 'fit-content' | 'max-content' | 'min-content' | string;
  screen?: number[];
} & HTMLAttributes<HTMLElement>;

export type TableProps = {
  striped?: boolean;
} & TableHTMLAttributes<HTMLTableElement>;

export type THeadProps = {
  color?: string;
  bg?: string;
} & HTMLAttributes<HTMLTableSectionElement>;

export type TFooterProps = {
  color?: string;
  bg?: string;
} & HTMLAttributes<HTMLTableSectionElement>;

export type ThProps = {
  w?: 'auto' | 'fit-content' | 'max-content' | 'min-content' | string;
  h?: 'auto' | 'fit-content' | 'max-content' | 'min-content' | string;
  align?: 'center' | 'left' | 'right';
} & ThHTMLAttributes<HTMLTableCellElement>;

export type TdProps = {
  w?: 'auto' | 'fit-content' | 'max-content' | 'min-content' | string;
  h?: 'auto' | 'fit-content' | 'max-content' | 'min-content' | string;
  align?: 'center' | 'left' | 'right';
} & TdHTMLAttributes<HTMLTableCellElement>;

export const TableContainer = ({ children, ...props }: TableContainerProps) => {
  return (
    <S.TableContainer className="paylivre-table__container" {...props}>
      {children}
    </S.TableContainer>
  );
};

export const Table = ({ children, striped = false, ...props }: TableProps) => {
  return (
    <S.Table className="paylivre-table" striped={striped} {...props}>
      {children}
    </S.Table>
  );
};

export const TableCaption = ({
  children,
  ...props
}: HTMLAttributes<HTMLElement>) => {
  return (
    <S.TableCaption className="paylivre-table__caption" {...props}>
      {children}
    </S.TableCaption>
  );
};

export const THead = ({ children, ...props }: THeadProps) => {
  return <S.THead {...props}>{children}</S.THead>;
};

export const TBody = ({
  children,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) => {
  return <S.TBody {...props}>{children}</S.TBody>;
};

export const TFoot = ({ children, ...props }: TFooterProps) => {
  return <S.TFoot {...props}>{children}</S.TFoot>;
};

export const Tr = ({
  children,
  ...props
}: HTMLAttributes<HTMLTableRowElement>) => {
  return <S.Tr {...props}>{children}</S.Tr>;
};

export const Th = ({ children, ...props }: ThProps) => {
  return <S.Th {...props}>{children}</S.Th>;
};

export const Td = ({ children, ...props }: TdProps) => {
  return <S.Td {...props}>{children}</S.Td>;
};
