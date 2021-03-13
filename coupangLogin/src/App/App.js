import Button from "../components/Button/Button";
import Logo from "../components/Logo/Logo";

const App = () => {
  return (
    <>
      <Logo type="colorful"/>
      <Button name="로그인" mode="primary" state="normal"/>
      <Button name="회원가입" mode="secondary" state="normal"/>
    </>
  );
}

export default App;
