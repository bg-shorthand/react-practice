import { ReactComponent as Colorful } from '../../assets/logo/type=colorful.svg';
import { ReactComponent as Black } from '../../assets/logo/type=black.svg';
import { ReactComponent as Mono } from '../../assets/logo/type=mono.svg';

const Logo = ({ type }) => {
  return (
    <h1 className="heading">
      <a href=".">
        {type === 'colorful' ? <Colorful/> : type === 'black' ? <Black/> : <Mono/> }
      </a>
    </h1>
  )
}

Logo.defaultProps = {
  type: 'colorful'
}

export default Logo