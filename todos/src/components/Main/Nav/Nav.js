const Nav = ({ menus }) => {
  return (
    <ul className="nav">
      {menus.map((todo, index) => {
        return (
          <li key={index} id={todo} className={index === 0 ? 'active' : ''}>
            {todo.split('').map((char, index) => index === 0 ? char.toUpperCase() : char).join('')}
          </li>
        )
      })}
    </ul>
  );
}

export default Nav;