import { useDispatch } from "react-redux";
import { increaseAction, decreaseAction } from "../../redux/reducer/number";

const Button = ({ children }) => {
  const dispatch = useDispatch();

  const handleNumber = () => {
    children === "-"
      ? dispatch(decreaseAction(1))
      : dispatch(increaseAction(1));
  };

  return <button onClick={handleNumber}>{children}</button>;
};

export default Button;
