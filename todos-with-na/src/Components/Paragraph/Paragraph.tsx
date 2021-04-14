type paragraphProps = {
  children: React.ReactNode;
};

const Paragraph = ({ children }: paragraphProps) => {
  return <p>{children}</p>;
};

export default Paragraph;
