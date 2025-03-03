import React from 'react';
import CircleArrowLeft from '../assets/svgs/circle-arrow-left-01.svg';
import CircleArrowLeftGrayed from '../assets/svgs/circle-arrow-left-01-grayed.svg';
import CircleArrowRight from '../assets/svgs/circle-arrow-right-01.svg';
import CircleArrowRightGrayed from '../assets/svgs/circle-arrow-right-01-grayed.svg';

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onNext: () => void;
  onPrevious: () => void;
  isLoading?: boolean; // Add isLoading prop
  isEndReached?: boolean; // Add isEndReached prop
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,

  onNext,
  onPrevious,
  isLoading,
  isEndReached,
}) => {
  const isPreviousDisabled = currentPage === 1 || isLoading;
  const isNextDisabled = isEndReached || isLoading;

  return (
    <div className="flex gap-2.5">
      {/* Previous Button */}
      <button
        onClick={onPrevious}
        disabled={isPreviousDisabled}
        className={isPreviousDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}
      >
        <img
          src={isPreviousDisabled ? CircleArrowLeftGrayed : CircleArrowLeft}
          alt="previous btn"
        />
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={isNextDisabled}
        className={isNextDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}
      >
        <img src={isNextDisabled ? CircleArrowRightGrayed : CircleArrowRight} alt="next btn" />
      </button>
    </div>
  );
};

export default Pagination;
