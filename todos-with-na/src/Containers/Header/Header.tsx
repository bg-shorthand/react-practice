import Button from "Components/Button/Button";
import Input from "Components/Input/Input";
import Title from "Components/Title/Title";

const Header = () => {
  return (
    <header>
      <Title level={1}>TODO LIST</Title>
      <Input id="todoInput" name="할 일을 추가해주세요." />
      <Button>추가</Button>
    </header>
  );
};

export default Header;
