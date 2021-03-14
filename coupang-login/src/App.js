import Logo from "./conponents/Logo/Logo";
import Button from "./conponents/Button/Button";
import Border from "./conponents/Border/Border";
import SignInput from "./conponents/SignInput/SignInput";
import Checkbox from "./conponents/Checkbox/Checkbox";

function App() {
  return (
    <>
      <Logo type="colorful" />
      <SignInput type="email" />
      <SignInput type="password" />
      <Checkbox checked="true">
        <a href=".">아이디(이메일)/비밀번호 찾기</a>
      </Checkbox>
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
