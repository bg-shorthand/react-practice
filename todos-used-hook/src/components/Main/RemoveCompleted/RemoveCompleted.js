const RemoveCompleted = ({ completed, all, disfatch }) => {
  return (
    <div>
      <button
        onClick={() => {
          disfatch({
            type: "removeCompleted",
          });
        }}
      >
        REMOVECOMPLETED
      </button>
      <span>
        {completed} / {all}
      </span>
    </div>
  );
};

export default RemoveCompleted;
