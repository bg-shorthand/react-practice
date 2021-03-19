import { useState, useEffect } from "react";
import { ReactComponent as Spinner } from "../../assets/spinner.svg";

const MovieList = ({ genre }) => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await fetch(
        `https://yts.mx/api/v2/list_movies.json?genre=${genre}`
      );
      const data = await res.json();
      const list = data.data.movies;

      setList(() => [...list]);
      setIsLoading(false);
    };
    fetchData();
  }, [genre]);

  return (
    <>
      {isLoading ? <Spinner /> : null}
      <ul>
        {list.map(({ medium_cover_image, id, title }) => (
          <li key={id}>
            <figure>
              <img src={medium_cover_image} alt={title} />
              <figcaption>{title}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </>
  );
};

MovieList.defaultProps = {
  genre: "all",
};

export default MovieList;
