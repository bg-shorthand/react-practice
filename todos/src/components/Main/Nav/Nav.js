import style from "./Nav.module.scss";

const Nav = ({ menus }) => {
  console.log(style);

  return (
    <ul className={`nav ${style.nav}`}>
      {menus.map((todo, index) => {
        return (
          <li
            key={index}
            id={todo}
            className={index === 0 ? `active %{style.active}` : ""}
          >
            {todo
              .split("")
              .map((char, index) => (index === 0 ? char.toUpperCase() : char))
              .join("")}
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
