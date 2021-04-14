import Button from "Components/Button/Button";
import Input from "Components/Input/Input";
import List from "Components/LIst/LIst";
import ListItem from "Components/LIst/LIstItem";

const Main = () => {
  return (
    <main>
      <Input type="checkbox" name="All" id="renderAll" />
      <Input type="checkbox" name="Active" id="renderActive" />
      <Input type="checkbox" name="Completed" id="renderCompleted" />
      <List>
        <ListItem>
          <Input type="checkbox" id={`listItem1`} name="HTML" />
          <Button>삭제</Button>
        </ListItem>
        <ListItem>
          <Input type="checkbox" id={`listItem2`} name="CSS" />
          <Button>삭제</Button>
        </ListItem>
        <ListItem>
          <Input type="checkbox" id={`listItem3`} name="JS" />
          <Button>삭제</Button>
        </ListItem>
      </List>
    </main>
  );
};

export default Main;
