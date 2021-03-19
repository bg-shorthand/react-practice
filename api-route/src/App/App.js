import { Route } from "react-router-dom";
import MovieList from "../component/MovieList/MovieList";

function App() {
  return (
    <>
      <Route path="/" exact render={() => <MovieList />} />
      <Route path="/comedy" render={() => <MovieList genre="comedy" />} />
      <Route path="/romance" render={() => <MovieList genre="romance" />} />
      <Route path="/action" render={() => <MovieList genre="action" />} />
    </>
  );
}

export default App;
