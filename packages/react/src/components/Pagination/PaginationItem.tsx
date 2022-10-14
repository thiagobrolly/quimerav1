import * as S from './styles';

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  isDisabled?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationItem({
  number,
  isCurrent = false,
  isDisabled = false,
  onPageChange,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <S.PaginationItem type="button" isCurrent isDisabled={isDisabled}>
        {number}
      </S.PaginationItem>
    );
  }

  return (
    <S.PaginationItem
      type="button"
      onClick={() => onPageChange(number)}
      isDisabled={isDisabled}
    >
      {number}
    </S.PaginationItem>
  );
}
