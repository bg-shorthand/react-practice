import { input } from "./Input.module.scss";

const Input = ({ text, addTodo }) => {
  return (
    <form className={input} onSubmit={addTodo}>
      <input type="text" placeholder={text} autoFocus />
    </form>
  );
};

Input.defaultProps = {
  text: "What needs to be done?",
};

export default Input;
