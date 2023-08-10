import { MdSearch } from 'react-icons/md';
import { useState } from 'react';

const SearchBar = ({ onSubmit, className }) => {
  const [searchWord, setSearchWord] = useState('');

  return (
    <div className={className}>
      <form
        className='flex h-14'
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(searchWord);
        }}
      >
        <input
          type='text'
          className='mr-4 w-full min-w-[128px] rounded-full border border-black px-7'
          value={searchWord}
          onChange={(event) => setSearchWord(event.target.value)}
        />
        <button
          type='submit'
          className='flex w-32 justify-center rounded-full border border-black p-4 hover:bg-gray-100'
        >
          <MdSearch className='h-full w-full' />
        </button>
      </form>
    </div>
  );
};

export { SearchBar };
