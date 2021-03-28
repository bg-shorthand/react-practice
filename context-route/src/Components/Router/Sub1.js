import { NavLink, useHistory, useLocation } from "react-router-dom";

const Sub1 = (props) => {
  console.log(props);

  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <ul>
      <li>
        <NavLink to={`/sub1/1`}>subsub1</NavLink>
      </li>
      <li>
        <NavLink to={`/sub1/2`}>subsub2</NavLink>
      </li>
      <li>
        <NavLink to={`/sub1/3`}>subsub3</NavLink>
      </li>
    </ul>
  );
};

export default Sub1;
