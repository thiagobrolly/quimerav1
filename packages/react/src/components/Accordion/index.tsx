import React from 'react';
import * as S from './styles';

export type AccordionProps = {
  children: React.ReactNode;
  type?: 'single' | 'multiple';
  disabled?: boolean;
  width?: string;
  className?: string;
};

export type AccordionItemProps = {
  children: React.ReactNode;
  value: string;
  disabled?: boolean;
};

type TriggerProps = {
  children: React.ReactNode;
};

type ContentProps = {
  children: React.ReactNode;
};

export const AccordionTrigger = ({ children }: TriggerProps) => (
  <S.AccordionHeader>
    <S.AccordionTrigger>
      {children}
      <S.ChevronDownIcon size={14} />
    </S.AccordionTrigger>
  </S.AccordionHeader>
);

export const AccordionContent = ({ children }: ContentProps) => (
  <S.AccordionContent>
    <S.ContentHeader>{children}</S.ContentHeader>
  </S.AccordionContent>
);

export const AccordionItem = ({
  children,
  disabled,
  value,
}: AccordionItemProps) => (
  <S.AccordionItem disabled={disabled} value={value} className="testetteste">
    {children}
  </S.AccordionItem>
);

export const Accordion = ({
  children,
  type = 'single',
  disabled = false,
  width = 'auto',
  className,
}: AccordionProps) => (
  <S.AccordionWrapper
    disabled={disabled}
    collapsible
    width={width}
    type={type}
    className={className}
  >
    {children}
  </S.AccordionWrapper>
);
