import { Route } from "react-router";
import BookmarkList from "../components/BookmarkList/BookmarkList";
import MoviesList from "../components/MoviesList/MoviesList";
import Nav from "../components/Nav/Nav";
import Test from "../components/Test/Test";

function App() {
  return (
    <>
      <Nav />
      <Route path="/" exact component={MoviesList} />
      <Route path="/favorite" exact component={BookmarkList} />
      {/* <Test /> */}
    </>
  );
}

export default App;
