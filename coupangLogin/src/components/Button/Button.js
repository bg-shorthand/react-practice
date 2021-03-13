import { Component } from 'react';
import './Button.scss';

const makeState = (mode, state) => {
  if (mode === 'primary') {
    return state === 'normal'
      ? {
        bgc: '#0074E9',
        color: '#ffffff',
      } 
      : {
        bgc: '#97AABD',
        color: '#D4E0ED',
      }
  } else if (mode === 'secondary') {
    return state === 'normal'
      ? {
        bgc: '#FFFFFF',
        color: '#0074E9',
      }
      : {
        bgc: '#DFDFDF',
        color: '#97AABD',
      }
  }
}

class Button extends Component {
  state = makeState(this.props.mode, this.props.state);

  render() {
    return (
      <button className="button" style={{
        backgroundColor: this.state.bgc,
        color: this.state.color,
      }}>
        {this.props.name}
      </button>
    );
  };
};

export default Button;