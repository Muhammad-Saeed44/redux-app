const inColor = "";

const BgColor = (state = inColor, action) => {
  if (action.type === "ChangeColor") {
    return (state= '#'+Math.floor(Math.random() * 16777215).toString(16));
  } else {
    return state;
  }
};

export default BgColor;
