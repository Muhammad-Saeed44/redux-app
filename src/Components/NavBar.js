import React from "react";
import { useSelector } from "react-redux";

export default function NavBar() {
  const myState = useSelector((state) => state.changeNumber);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary   ">
        <div className="container-fluid py-3 bg-dark">
          <a
            className="navbar-brand text-danger target_blank"
            target="_blank"
            href="https://redux.js.org/"
          >
            <h1> Redux JS</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <h4 className="text-secondary">
            Click on Redux JS button to learn more about REDUX
          </h4>
          <p
            className="bg-success text-light"
            style={{ width: "100px", color: "white", textAlign: "center" }}
          >
            {myState}
          </p>
        </div>
      </nav>
    </>
  );
}
