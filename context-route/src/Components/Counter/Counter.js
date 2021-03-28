import { NumberContextProvider } from "../Context/NumberContext";
import Button from "./Button";
import Display from "./Display";

const Counter = () => {
  return (
    <>
      <NumberContextProvider>
        <Button>-</Button>
        <Display></Display>
        <Button>+</Button>
      </NumberContextProvider>
    </>
  );
};

export default Counter;
