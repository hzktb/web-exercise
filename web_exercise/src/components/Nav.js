import React from "react";

function Nav(props) {
  const { selected, setSelected } = props;
  return (
    <div className="d-flex justify-content-center pt-5">
      <div>
        <button
          className={`btn nav-btn ${selected === "product" ? "selected" : ""}`}
          onClick={() => setSelected("product")}
        >
          Product Suggestion Form
        </button>
        <button
          className={`btn nav-btn ${selected === "contact" ? "selected" : ""}`}
          onClick={() => setSelected("contact")}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Nav;
