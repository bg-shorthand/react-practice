import Logo from "./conponents/Logo/Logo";
import Button from "./conponents/Button/Button";
import Border from "./conponents/Border/Border";
import SignInput from "./conponents/SignInput/SignInput";

function App() {
  return (
    <>
      <Logo type="colorful" />
      <SignInput type="email" />
      <SignInput type="password" />
      <Button mode="primary" state="normal">
        로그인
      </Button>
      <Border width="575"/>
      <Button mode="secondary" state="normal">
        회원가입
      </Button>
    </>
  )
}

export default App;
