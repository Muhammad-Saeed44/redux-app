const initialState = 0;
const changeNumber = (state = initialState, action) => {
  if (action.type === "Increment") {
    return state + 100;
  } else if (action.type === "Decrement") {
    return state - 100;
  } else if (action.type === "Reset") {
    return (state = 0);
  } else {
    return state;
  }
};

export default changeNumber;
