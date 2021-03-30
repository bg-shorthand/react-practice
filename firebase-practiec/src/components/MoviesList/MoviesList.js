import { useEffect, useState } from "react";
import { addData } from "../../fbAPI";

const MoviesList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const res = await fetch("https://yts.mx/api/v2/list_movies.json");
      const data = await res.json();
      setList([...list, ...data.data.movies]);
    };
    getList();
  }, []);

  const addMovie = (movie) => {
    addData(movie);
  };

  return (
    <ul>
      {list.map((movie) => {
        return (
          <li key={movie.id} id={movie.id}>
            {movie.title}
            <button onClick={() => addMovie(movie)}>Bookmark</button>
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesList;
