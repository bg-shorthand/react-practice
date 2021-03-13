import { Component } from 'react';
import { ReactComponent as Letter } from '../../assets/icon/shape=letter.svg';
import { ReactComponent as Lock } from '../../assets/icon/shape=lock.svg';
import { ReactComponent as Show } from '../../assets/icon/shape=show.svg';
import { ReactComponent as Hide } from '../../assets/icon/shape=hide.svg';
import Input from './Input';

import './SignInput.scss';

class SignInput extends Component {

  state = {
    state: 'normal',
    visible: false,
    hasError: false,
  }

  changeVisible = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  render() {
    const { type } = this.props;
    const { state, visible, hasError } = this.state;

    return (
      <>
        <div className={`login--input ${type}`} style={hasError ? {border: '2px solid #E52528'} : {}}>
          
          {type === 'email' ? <Letter/> : <Lock/>}

          <Input type={type} state={state} visible={visible} hasError={hasError} />
          
          {type === 'password' ? visible ? <Hide onClick={this.changeVisible} /> : <Show onClick={this.changeVisible}/> : null}

        </div>

        <div className="alert">
          {type === 'email' ? '아이디(이메일)는 이메일 형식으로 입력해주세요.' : '비밀번호를 입력해주세요.'}
        </div>
      </>
    )
  }
}

export default SignInput;