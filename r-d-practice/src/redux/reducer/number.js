const INCREASE = "increase";
const DECREASE = "decrease";

const initialNumber = 0;

const increaseAction = (step) => ({
  type: INCREASE,
  step,
});
const decreaseAction = (step) => ({
  type: DECREASE,
  step,
});

const numberReducer = (state = initialNumber, action) => {
  switch (action.type) {
    case INCREASE:
      return state + action.step;
    case DECREASE:
      return state - action.step;
    default:
      return state;
  }
};

export default numberReducer;
export { INCREASE, DECREASE, increaseAction, decreaseAction };
