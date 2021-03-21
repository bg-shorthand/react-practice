import { Route } from "react-router-dom";
import { useState, createContext } from "react";
import MovieList from "../component/MovieList/MovieList";
import Nav from "../component/Nav/Nav";
import SearchInput from "../component/SearchInput/SearchInput";
import SearchResert from "../component/SearchResert/SearchResert";

export const ListState = createContext(null);

export function App() {
  const [state, setState] = useState({
    list: [],
    isLoading: false,
    keyword: "all",
  });

  return (
    <ListState.Provider value={{ state, setState }}>
      <SearchInput />
      <Nav />
      <SearchResert />
      <Route path="/" exact render={() => <MovieList />} />
      <Route path="/comedy" render={() => <MovieList genre="comedy" />} />
      <Route path="/romance" render={() => <MovieList genre="romance" />} />
      <Route path="/action" render={() => <MovieList genre="action" />} />
    </ListState.Provider>
  );
}
