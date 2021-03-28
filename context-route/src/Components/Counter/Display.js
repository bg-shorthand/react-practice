import { useNumberContext } from "../Context/NumberContext";

const Display = () => {
  const { state } = useNumberContext();

  return <span>{state}</span>;
};

export default Display;
