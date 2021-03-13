/* eslint-disable jsx-a11y/anchor-is-valid */
import { ReactComponent as Colorful } from '../../essets/logo/type=colorful.svg';
import { ReactComponent as Black } from '../../essets/logo/type=black.svg';
import { ReactComponent as Mono } from '../../essets/logo/type=mono.svg';

const Logo = (props) => {
  return (
    <h1 className="heading">
      <a href="#">
        {props.type === 'colorful' ? <Colorful/> : props.type === 'black' ? <Black/> : <Mono/>}
      </a>
    </h1>
  )
}

export default Logo;