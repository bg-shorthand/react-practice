type inputProps = {
  id: string;
  name: string;
  type?: "text" | "checkbox" | "radio" | "select";
};

const Input = ({ id, name, type }: inputProps) => {
  return (
    <>
      <input id={id} name={name} type={type} />
      <label htmlFor={id}>{name}</label>
    </>
  );
};

Input.defaultProps = {
  type: "text",
};

export default Input;
