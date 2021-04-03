import { useSelector } from "react-redux";

type titleInputProps = {
  className: string;
  width?: string;
};

const TitleInput = ({ className }: titleInputProps) => {
  const postState = useSelector((state) => state.post);

  return (
    <div className={className}>
      <input id="titleInput" type="text"></input>
      <label htmlFor="titleInput">제목을 입력하세요.</label>
    </div>
  );
};

TitleInput.defaultProps = {
  width: "100%",
};

export default TitleInput;
