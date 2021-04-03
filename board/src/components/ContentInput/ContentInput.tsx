type contentInput = {
  className: string;
  width?: string;
  height?: string;
};

const ContentInput = ({ className }: contentInput) => {
  return (
    <div className={className}>
      <textarea id="contentInput"></textarea>
      <label htmlFor="contentInput">내용을 입력하세요.</label>
    </div>
  );
};

ContentInput.defaultProps = {
  width: "100%",
};

export default ContentInput;
