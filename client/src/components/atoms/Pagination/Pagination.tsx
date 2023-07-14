import { useEffect } from 'react';
import { NewUser } from '../../../shared/api/types';

interface PaginationProps {
  currentPage: number;
  displayData: NewUser[];
  itemsPerPage: number;
  setCurrentPage: (page: number) => void;
}

const Pagination = ({
  currentPage,
  displayData,
  itemsPerPage,
  setCurrentPage,
}: PaginationProps) => {

  useEffect(() => {
  }, [displayData, currentPage])
  

  return Array(Math.ceil(displayData.length / itemsPerPage))
    .fill(0)
    .map((_, i) => i + 1)
    .filter((x, _, arr) => {
      if (x === 1) {
        return x;
      } else if (x === currentPage) {
        return x;
      } else if (
        x - 1 === currentPage ||
        x - 2 === currentPage ||
        x + 1 === currentPage ||
        x + 2 === currentPage
      ) {
        return x;
      } else if (x === arr.length) {
        return x;
      }
    })
    .map((x) => (
      <button
        key={x}
        onClick={() => setCurrentPage(x)}
        className={currentPage === x ? 'selected' : ''}
      >
        {x}
      </button>
    ));
};

export default Pagination;
