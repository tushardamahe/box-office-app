import { useState } from "react";

const Home = () => {
  const [searchStr, setSearchStr] = useState("");

  const onSearchinputChange = (ev) => {
    setSearchStr(ev.target.value);
  };

  const onSearch = async (ev) => {
    ev.preventDefault();

    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${searchStr}`
    );

    const body = await response.json();
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onSearchinputChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Home;
