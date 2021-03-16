import style from "./Header.module.scss";

const Header = ({ title, ver }) => {
  return (
    <>
      <h1 className={`title ${style.title}`}>{title}</h1>
      <div className="ver">{ver}</div>
    </>
  );
};

Header.defaultProps = {
  title: "Todos",
  ver: "3.0",
};

export default Header;
