import { useContext } from "react";
import { ListState } from "../../App/App";

const SearchInput = () => {
  const { state, setState } = useContext(ListState);

  const search = (e) => {
    e.preventDefault();

    setState({
      ...state,
      isLoading: true,
    });

    const fetchData = async () => {
      const res = await fetch(
        `https://yts.mx/api/v2/list_movies.json?query_term=${e.target.firstElementChild.value}`
      );
      const data = await res.json();

      if (data.data.movies.length) {
        setState(() => ({
          list: [...data.data.movies],
          isLoading: false,
          keyword: e.target.firstElementChild.value,
        }));
      }
    };
    fetchData();
  };

  return (
    <>
      <form onSubmit={search}>
        <input id="searchInput" type="text" />
        <label htmlFor="searchInput">검색</label>
        <button type="submit">검색</button>
      </form>
    </>
  );
};

export default SearchInput;
