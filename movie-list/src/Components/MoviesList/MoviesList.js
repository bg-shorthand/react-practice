import { useContext } from "react";
import { StateContext } from "../../App/App";

const MoviesList = () => {
  const { state } = useContext(StateContext);

  return (
    <ul>
      {state.moviesList.map(({ id, title }) => {
        return (
          <li key={id} id={id}>
            {title}
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesList;
