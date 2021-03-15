const Footer = () => {
  return (
    <>
      <div className="complete-all">
        <input className="checkbox" type="checkbox" id="ck-complete-all" />
        <label htmlFor="ck-complete-all">Mark all as complete</label>
      </div>
      <div className="clear-completed">
        <button className="btn">Clear completed (<span className="completed-todos">0</span>)</button>
        <strong className="active-todos">0</strong> items left
      </div>
    </>
  );
}

export default Footer;