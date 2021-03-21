import { useContext } from "react";
import { ListState } from "../../App/App";

const SearchResert = () => {
  const { state } = useContext(ListState);

  return <p>{`검색결과: ${state.keyword}`}</p>;
};

export default SearchResert;
