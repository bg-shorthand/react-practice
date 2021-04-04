import { Route } from "react-router";
import StyledNav from "./Nav/StyledNav";
import StyledWrite from "./Write/StyledWrite";
import { ReactComponent as Spinner } from "../../img/icon/spinner.svg";

const Main = () => {
  return (
    <main>
      <StyledNav className="Nav" />
      <Route path="/" exact render={() => <Spinner />} />
      <Route path="/poem" render={() => <Spinner />} />
      <Route path="/novel" render={() => <Spinner />} />
      <Route path="/essay" render={() => <Spinner />} />
      <Route path="/write" render={() => <StyledWrite className="write" />} />
    </main>
  );
};

export default Main;
