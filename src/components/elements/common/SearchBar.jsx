import { MdSearch } from 'react-icons/md';
import { useState } from 'react';

const SearchBar = ({ onSubmit, className }) => {
  const [searchWord, setSearchWord] = useState('');

  return (
    <div className={className}>
      <form
        className="flex h-14 min-w-min justify-center"
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(searchWord);
        }}
      >
        <input
          type="text"
          className="mr-4 w-full min-w-[128px] rounded-full border px-7"
          value={searchWord}
          onChange={(event) => setSearchWord(event.target.value)}
        />
        <button
          type="submit"
          className="flex w-32 justify-center rounded-full border p-4 hover:bg-gray-100"
        >
          <MdSearch className="h-full w-full" />
        </button>
      </form>
    </div>
  );
};

export { SearchBar };
