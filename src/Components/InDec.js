import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  IncNumber,
  DecNumber,
  ResetNumber,
  changeBgColor,
} from "../actions/index";
export default function InDec() {
  const myStat = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  const inColor = useSelector((state) => state.BgColor);

  return (
    <>
      {(document.body.style.backgroundColor = inColor)}
      <div id="Main">
        <p
          id="myinput"
          className="bg-success text-light"
          style={{ textAlign: "center", width: "80px", marginLeft: "500px" }}
        >
          {myStat}
        </p>
        <div id="DisplayCounter"></div>
        <br />
        <button id="Increment" onClick={() => dispatch(IncNumber())}>
          {" "}
          Increment{" "}
        </button>
        <button
          id="Decrement"
          disabled={myStat <= 0 ? true : false}
          onClick={() => dispatch(DecNumber())}
        >
          {" "}
          Decrement{" "}
        </button>
        <button id="Reset" onClick={() => dispatch(ResetNumber())}>
          Reset
        </button>

        <br></br>

        <button id="Reset" onClick={() => dispatch(changeBgColor())}>
          Change BackGround Color
        </button>
      </div>
    </>
  );
}
