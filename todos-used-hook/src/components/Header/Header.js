const Header = ({ title, ver }) => {
  return (
    <>
      <h1 className="title">{title}</h1>
      <div className="ver">{ver}</div>
    </>
  );
};

export default Header;
