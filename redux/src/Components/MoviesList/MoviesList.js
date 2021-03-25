import { useEffect } from "react";
import moviesListStore from "../../Redux/movieListStore";

const MoviesList = () => {
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://yts.mx/api/v2/list_movies.json");
      const data = await res.json();
      moviesListStore.dispatch({
        type: "moviesListCreate",
        payload: data.data.movies,
      });
    };
    getData();
  }, []);

  return (
    <ul>
      {moviesListStore.getState().moviesList.map((movie) => {
        return <li key={movie.id}>{movie.title}</li>;
      })}
    </ul>
  );
};

export default MoviesList;
