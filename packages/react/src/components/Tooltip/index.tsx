import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as S from './styles';

export type TooltipProps = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  tooltipColor?: string;
  tooltipSize?: string;
};

export const Tooltip = ({
  trigger,
  children,
  className,
  tooltipColor,
  tooltipSize,
}: TooltipProps) => {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root delayDuration={500}>
        <S.Trigger asChild>
          <div className={`trigger-tooltip-ui ${className}`}>{trigger}</div>
        </S.Trigger>
        <S.Content
          sideOffset={5}
          tooltipSize={tooltipSize}
          tooltipColor={tooltipColor}
        >
          {children}
          <S.Arrow offset={10} tooltipColor={tooltipColor} />
        </S.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};
