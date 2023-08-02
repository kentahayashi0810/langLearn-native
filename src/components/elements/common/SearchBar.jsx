import { MdSearch } from "react-icons/md";
import { useState } from "react";

const SearchBar = ({ onSubmit, className }) => {
  const [searchWord, setSearchWord] = useState("");

  return (
    <div className={className}>
      <form
        className="flex h-14 justify-center min-w-min"
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(searchWord);
        }}
      >
        <input
          type="text"
          className="rounded-full mr-4 border min-w-[128px] w-full px-7"
          value={searchWord}
          onChange={(event) => setSearchWord(event.target.value)}
        />
        <button
          type="submit"
          className="rounded-full border p-4 w-32 flex justify-center hover:bg-gray-100"
        >
          <MdSearch className="h-full w-full" />
        </button>
      </form>
    </div>
  );
};

export { SearchBar };
