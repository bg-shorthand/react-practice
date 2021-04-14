import Input from "Components/Input/Input";
import Paragraph from "Components/Paragraph/Paragraph";

const Footer = () => {
  return (
    <footer>
      <Input type="checkbox" id="checkAll" name="Check All" />
      <Paragraph>
        <span>1</span>/<span>2</span>
      </Paragraph>
    </footer>
  );
};

export default Footer;
