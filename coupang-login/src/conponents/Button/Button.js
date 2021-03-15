import styles from './Button.module.scss'

const Button = ({ mode, state, children }) => {
  return (
    <button className={`${styles.button} ${styles[mode]} ${styles[state]}`}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  mode: 'primary',
  state: 'normal',
  children: '버튼'
}

export default Button;