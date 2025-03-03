import React, { useCallback } from 'react';
import { debounce } from '../utils/debounce';

interface SearchInputProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder = 'Search', onSearch }) => {
  // Debounce the onSearch callback with a delay of 2000s
  const debouncedSearch = useCallback(debounce(onSearch, 2000), [onSearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value); // Call the debounced search function
  };

  return (
    <div className="relative mb-[30px]">
      <img
        src="src/assets/svgs/ai-search-02.svg"
        alt="search icon"
        className="absolute top-3 left-4"
      />
      <input
        className="w-full rounded-lg border-[1.5px] border-[#A6A6A6] px-4 py-3 pl-12"
        type="search"
        placeholder={placeholder}
        onChange={handleChange} // Call handleChange on input change
      />
    </div>
  );
};

export default SearchInput;
