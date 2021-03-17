import { useRef } from "react";

const CompletedAll = ({ disfatch, todos }) => {
  const completedAll = useRef();

  return (
    <>
      <input
        id="completedAll"
        type="checkbox"
        onChange={() => {
          disfatch({
            type: "completedAll",
            checked: completedAll.current.checked,
          });
        }}
        ref={completedAll}
      />
      <label htmlFor="completedAll">Completed All</label>
    </>
  );
};

export default CompletedAll;
