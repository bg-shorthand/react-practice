import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">main</NavLink>
      </li>
      <li>
        <NavLink to="/sub1">sub1</NavLink>
      </li>
      <li>
        <NavLink to="/sub2">sub2</NavLink>
      </li>
    </ul>
  );
};

export default Nav;
