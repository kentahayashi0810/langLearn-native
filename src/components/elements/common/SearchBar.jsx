import { MdSearch } from "react-icons/md";
import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [searchWord, setSearchWord] = useState("");

  return (
    <form className="flex">
      <input
        type="text"
        className="rounded-full mr-4"
        value={searchWord}
        onChange={(event) => setSearchWord(event.target.value)}
      />
      <button type="submit" className="rounded-full" onClick={onSubmit}>
        <MdSearch />
      </button>
    </form>
  );
};

export { SearchBar };
