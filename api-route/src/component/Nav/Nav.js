import styles from "./Nav.module.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul className={styles.Nav}>
      <li>
        <NavLink to="/comedy">COMEDY</NavLink>
      </li>
      <li>
        <NavLink to="/romance">ROMANCE</NavLink>
      </li>
      <li>
        <NavLink to="/action">ACTION</NavLink>
      </li>
    </ul>
  );
};

export default Nav;
