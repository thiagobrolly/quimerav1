import React from 'react';
import { Root as PopoverPrimitive } from '@radix-ui/react-popover';
import * as S from './styles';

export type PopoverProps = React.ComponentProps<typeof PopoverPrimitive> & {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  colorContent?: string;
};

export const Popover = ({
  trigger,
  children,
  className,
  colorContent,
  ...props
}: PopoverProps) => {
  return (
    <PopoverPrimitive {...props}>
      <S.Trigger asChild>
        <div className={`trigger-popover ${className}`}>{trigger}</div>
      </S.Trigger>

      <S.Content sideOffset={5} colorContent={colorContent}>
        {children}
        <S.Arrow offset={10} colorContent={colorContent} />
      </S.Content>
    </PopoverPrimitive>
  );
};
