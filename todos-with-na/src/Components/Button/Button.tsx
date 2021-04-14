type buttonProps = {
  children: React.ReactNode;
  type: "button" | "submit";
};

const Button = ({ children, type }: buttonProps) => {
  return <button type={type}>{children}</button>;
};

Button.defaultProps = {
  type: "button",
};

export default Button;
