import { useSelector } from "react-redux";

const Display = () => {
  const number = useSelector((store) => store.number);

  return <span>{number}</span>;
};

export default Display;
