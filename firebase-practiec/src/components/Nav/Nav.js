import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">All List</NavLink>
      </li>
      <li>
        <NavLink to="favorite">Favorite List</NavLink>
      </li>
    </ul>
  );
};

export default Nav;
