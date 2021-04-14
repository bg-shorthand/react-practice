type listProps = {
  children: React.ReactNode;
};

const List = ({ children }: listProps) => {
  return <ul>{children}</ul>;
};

export default List;
