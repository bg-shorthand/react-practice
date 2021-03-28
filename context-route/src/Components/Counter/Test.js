const Test = (props) => {
  console.log(props);
  props.test();

  return <span>{props.type}</span>;
};

export default Test;
