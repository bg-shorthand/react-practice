import {
  useNumberContext,
  action,
  INCREASE,
  DECREASE,
} from "../Context/NumberContext";

const Button = ({ children }) => {
  const { dispatch } = useNumberContext();

  const chooseNumb = () => {
    dispatch(action(children === "+" ? INCREASE : DECREASE));
  };

  return <button onClick={chooseNumb}>{children}</button>;
};

export default Button;
