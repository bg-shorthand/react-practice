import { useState } from "react";

const Counter = () => {
  const [list, setList] = useState([]);

  return (
    <>
      <button
        onClick={() => {
          setList([
            { content: "html" },
            { content: "css" },
            { content: "javascript" },
          ]);
        }}
      >
        -
      </button>
      <ul>
        {list.map((v) => (
          <li>{v.content}</li>
        ))}
      </ul>
    </>
  );
};

export default Counter;
