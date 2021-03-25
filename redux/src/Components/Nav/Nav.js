import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">all</NavLink>
      </li>
      <li>
        <NavLink to="/action">action</NavLink>
      </li>
      <li>
        <NavLink to="/favorite">favorite</NavLink>
      </li>
    </ul>
  );
};

export default Nav;
