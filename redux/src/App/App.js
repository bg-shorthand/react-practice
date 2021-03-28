import A11yHidden from "../Components/Container/Container.styled";
import MoviesList from "../Components/MoviesList/MoviesList";
import Nav from "../Components/Nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <A11yHidden as="div">
        <MoviesList />
      </A11yHidden>
    </>
  );
}

export default App;
