import StyledButton from "../../../components/Button/StyledButton";
import StyledContentInput from "../../../components/ContentInput/StyledContentInput";
import StyledSelect from "../../../components/Select/StyledSelect";
import StyledTitleInput from "../../../components/TitleInput/StyledTitleInput";

type writeProps = {
  className: string;
};

const Write = ({ className }: writeProps) => {
  return (
    <form className={className}>
      <StyledSelect />
      <StyledTitleInput className="title-input" />
      <StyledContentInput className="content-input" height="400" />
      <StyledButton
        width="960"
        className="write-submit"
        children="UPLOAD"
        type="submit"
      />
    </form>
  );
};

export default Write;
