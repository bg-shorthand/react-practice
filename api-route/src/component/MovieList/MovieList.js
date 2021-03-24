import { useEffect, useContext } from "react";
import { ListState } from "../../App/App";
import { ReactComponent as Spinner } from "../../assets/spinner.svg";

const MovieList = ({ genre }) => {
  const { state, setState } = useContext(ListState);

  useEffect(() => {
    console.log("effect");
    const fetchData = async () => {
      setState(() => ({
        ...state,
        isLoading: true,
      }));
      const res = await fetch(
        `https://yts.mx/api/v2/list_movies.json?genre=${genre}`
      );
      const data = await res.json();
      setState(() => ({
        ...state,
        list: [...data.data.movies],
        isLoading: false,
        keyword: genre,
      }));
    };
    fetchData();
  }, []);

  return (
    <>
      {state.isLoading ? (
        <Spinner />
      ) : (
        <ul>
          {state.list.map(({ medium_cover_image, id, title, genres }) => (
            <li key={id}>
              <figure>
                <img src={medium_cover_image} alt={title} />
                <figcaption>{`${title}(${genres[0]})`}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

MovieList.defaultProps = {
  genre: "all",
};

export default MovieList;
