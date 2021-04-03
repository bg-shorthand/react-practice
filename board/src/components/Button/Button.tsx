type buttonProps = {
  className: string;
  children: React.ReactNode;
  width?: string;
  type?: "button" | "submit" | "reset" | undefined;
};

const Button = ({ className, children, type }: buttonProps) => {
  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
};

export default Button;
