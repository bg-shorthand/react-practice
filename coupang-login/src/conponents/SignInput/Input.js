const Input = ({ type, state, visible, hasError}) => {
  return (
    <div>
      <input
        id={`login${type}input`}
        type={type === 'password' && visible === false
          ? 'password' : 'text'}
        placeholder={type === 'email'
          ? '아이디(이메일)' : '비밀번호'}
      />
      <label htmlFor={`login${type}input`}>
        {state === 'normal' ? type === 'email' ? '아이디(이메일)' : '비밀번호' : ''}
      </label>
    </div>
  )
}

Input.defaultProps = {
  type: 'email',
  state: 'normal',
};

export default Input;