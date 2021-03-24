import { useEffect, useReducer, createContext } from "react";
import { Route } from "react-router-dom";
import MoviesList from "../Components/MoviesList/MoviesList";
import Nav from "../Components/Nav/Nav";
import "./App.css";

const initialState = {
  moviesList: [],
  favoriteMovies: [],
  isLoading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "updateMoviesList":
      return {
        ...state,
        moviesList: [...state.moviesList, ...action.data],
      };
    case "changeIsLoading":
      return {
        ...state,
        isLoading: action.state,
      };
    default:
      return state;
  }
};
export const StateContext = createContext(null);

export function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { isLoading } = state;

  useEffect(() => {
    const getList = async () => {
      dispatch({ type: "changeIsLoading", state: true });
      const res = await fetch("https://yts.mx/api/v2/list_movies.json");
      const data = await res.json();
      dispatch({ type: "updateMoviesList", data: data.data.movies });
      dispatch({ type: "changeIsLoading", state: false });
    };
    getList();
  }, []);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <Nav />
      {isLoading ? (
        <div>"로딩 중"</div>
      ) : (
        <Route path="/" exact>
          <MoviesList />
        </Route>
      )}
    </StateContext.Provider>
  );
}
