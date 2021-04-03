import { Route } from "react-router";
import StyledNav from "./Nav/StyledNav";
import StyledWrite from "./Write/StyledWrite";

const Main = () => {
  return (
    <main>
      <StyledNav className="Nav" />
      <Route path="/write" render={() => <StyledWrite className="write" />} />
    </main>
  );
};

export default Main;
