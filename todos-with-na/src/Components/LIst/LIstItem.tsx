type listItemProps = {
  children: React.ReactNode;
};

const ListItem = ({ children }: listItemProps) => {
  return <li>{children}</li>;
};

export default ListItem;
