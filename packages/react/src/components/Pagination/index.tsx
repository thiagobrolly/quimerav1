import { CaretRight, CaretLeft } from 'phosphor-react';
import { PaginationItem } from './PaginationItem';
import * as S from './styles';

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  isDisabled?: boolean;
  text?: string;
  onPageChange: (page: number) => void;
}

// 1 2 currentPage 4 5
const sisterPages = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export const Pagination = ({
  totalCountOfRegisters,
  currentPage = 10,
  registersPerPage = 1,
  isDisabled,
  text = 'de',
  onPageChange,
}: PaginationProps) => {
  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage);

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - sisterPages, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + sisterPages, lastPage),
        )
      : [];

  return (
    <S.PaginationContainer role="navigation" aria-label="Pagination">
      <S.Info>
        <strong>
          {currentPage * registersPerPage - registersPerPage + 1} -{' '}
        </strong>
        <strong>
          {totalCountOfRegisters < registersPerPage * currentPage
            ? totalCountOfRegisters
            : currentPage * registersPerPage}
        </strong>
        <strong>
          {text} {totalCountOfRegisters}
        </strong>
      </S.Info>

      <S.Pagination>
        {currentPage > 1 && (
          <S.NextPrev
            onClick={() => onPageChange(currentPage - 1)}
            isDisabled={isDisabled}
            aria-label="Prev"
            aria-hidden={currentPage < 1}
          >
            <CaretLeft size={32} />
          </S.NextPrev>
        )}

        <S.PaginationItemContainer>
          {currentPage > 1 + sisterPages && (
            <>
              <PaginationItem
                onPageChange={onPageChange}
                number={1}
                isDisabled={isDisabled}
              />
              {currentPage > 2 + sisterPages && <span>...</span>}
            </>
          )}

          {previousPages.length > 0 &&
            previousPages.map((page) => {
              return (
                <PaginationItem
                  onPageChange={onPageChange}
                  key={page}
                  number={page}
                  isDisabled={isDisabled}
                />
              );
            })}

          <PaginationItem
            onPageChange={onPageChange}
            number={currentPage}
            isCurrent
            isDisabled={isDisabled}
          />

          {nextPages.length > 0 &&
            nextPages.map((page) => {
              return (
                <PaginationItem
                  onPageChange={onPageChange}
                  key={page}
                  number={page}
                  isDisabled={isDisabled}
                />
              );
            })}

          {currentPage + sisterPages < lastPage && (
            <>
              {currentPage + 1 + sisterPages < lastPage && <span>...</span>}

              <PaginationItem
                onPageChange={onPageChange}
                number={lastPage}
                isDisabled={isDisabled}
              />
            </>
          )}
        </S.PaginationItemContainer>
        {currentPage !== lastPage && totalCountOfRegisters > registersPerPage && (
          <S.NextPrev
            onClick={() => onPageChange(currentPage + 1)}
            isDisabled={isDisabled}
            aria-label="Next"
            aria-hidden={
              !(
                currentPage !== lastPage &&
                totalCountOfRegisters > registersPerPage
              )
            }
          >
            <CaretRight size={32} />
          </S.NextPrev>
        )}
      </S.Pagination>
    </S.PaginationContainer>
  );
};
