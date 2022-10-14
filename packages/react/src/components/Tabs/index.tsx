import { useCallback, useState } from 'react';
import * as S from './styles';

export type TabPaneProps = {
  title: string;
  children: React.ReactElement | React.ReactElement[];
} & React.HTMLAttributes<HTMLElement>;

export type TabTitleProps = {
  title: string;
  index: number;
  isActive?: boolean;
  setSelectedTab: (index: number) => void;
};

export type TabsProps = {
  children: React.ReactElement<TabTitleProps>[];
  preSelectedTabIndex?: number;
  w?: string;
  h?: string;
  maxW?: 'auto' | 'fit-content' | 'max-content' | 'min-content' | string;
  minW?: 'auto' | 'fit-content' | 'max-content' | 'min-content' | string;
  m?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  mx?: string;
  my?: string;
} & React.HTMLAttributes<HTMLElement>;

export const TabTitle = ({
  title,
  index,
  setSelectedTab,
  isActive,
  ...props
}: TabTitleProps) => {
  const handleOnClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);
  return (
    <S.TabTitle
      isActive={isActive}
      type="button"
      onClick={handleOnClick}
      {...props}
    >
      {title}
    </S.TabTitle>
  );
};

export const TabPane = ({ children, ...props }: TabPaneProps) => {
  return <S.TabPane {...props}>{children}</S.TabPane>;
};

export const Tabs = ({
  children,
  preSelectedTabIndex,
  ...props
}: TabsProps) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(
    preSelectedTabIndex || 0,
  );

  return (
    <S.Wrapper {...props}>
      <S.TabContent>
        {children.map((item, index) => (
          <TabTitle
            key={item.props.title}
            title={item.props.title}
            index={index}
            isActive={index === selectedTabIndex}
            setSelectedTab={setSelectedTabIndex}
          />
        ))}
      </S.TabContent>

      {children[selectedTabIndex]}
    </S.Wrapper>
  );
};
