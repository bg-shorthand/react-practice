import { useRef } from "react";
import { useContext } from "react";

import { TodosContext } from "../../Context/Context";

const CompletedAll = () => {
  const { dispatch } = useContext(TodosContext);
  const completedAll = useRef();

  return (
    <>
      <input
        id="completedAll"
        type="checkbox"
        onChange={() => {
          dispatch({
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
