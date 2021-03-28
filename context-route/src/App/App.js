import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Main from "../Components/Router/Main";
import Nav from "../Components/Router/Nav";
import Sub1 from "../Components/Router/Sub1";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/sub1">
          <Sub1 />
        </Route>
        <Route path="/sub2">sub2</Route>
        <Route path="/sub1/1">subsub1</Route>
        <Route path="/sub1/2">subsub2</Route>
        <Route path="/sub1/3">subsub3</Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
