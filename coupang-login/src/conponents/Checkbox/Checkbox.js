import { Component } from 'react';
import { ReactComponent as True } from '../../assets/checkbox/checked=true.svg';
import { ReactComponent as False } from '../../assets/checkbox/checked=false.svg';

import { autoCheck } from './Checkbox.module.scss';

class Checkbox extends Component {
  state = {
    checked: true,
  }

  changeCheck = () => {
    this.setState({
      checked: !this.state.checked
    })
  }
  
  render() {
    return (
      <>
        <form className={autoCheck}>
          <input
            id="autoCheck"
            type="checkbox"
            checked={this.state.checked}
            onChange={this.changeCheck}
          />
          <label htmlFor="autoCheck">
            {this.state.checked ? <True/> : <False/>}
            <span>자동 로그인</span>
          </label>
        </form>
        {this.props.children}
      </>
    )
  }
}

export default Checkbox;