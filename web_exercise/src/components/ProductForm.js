import React, { useState } from "react";

function ProductForm(props) {
  const { selected } = props;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [descError, setDescError] = useState("");

  const handleEmailValidate = () => {
    let emailRegex =
      /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
    if (emailRegex.test(email)) {
      setEmailError("");
    } else {
      setEmailError("Please enter a valid email");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={`mt-5 container form ${selected === "product" ? "show" : ""}`}
    >
      <h4 className="row">Product Suggestion Form</h4>
      <form onSubmit={handleSubmit} className="p-5 row">
        <label htmlFor="name">
          Name:
          <br />
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => {
              name.length < 1
                ? setNameError("Name cannot be empty")
                : setNameError("");
            }}
          />
          <small className="error">{nameError}</small>
        </label>
        <br />
        <label htmlFor="email">
          Email Address:
          <br />
          <input
            className="form-control"
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => handleEmailValidate()}
          />
          <small className="error">{emailError}</small>
        </label>
        <br />
        <label htmlFor="desc">
          Item Description:
          <br />
          <textarea
            className="form-control"
            name="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            onBlur={() => {
              name.length < 1
                ? setDescError("Description cannot be empty")
                : setDescError("");
            }}
          ></textarea>
          <small className="error">{descError}</small>
        </label>
        <br />
        <input type="submit" value="Submit" className="submit" />
      </form>
    </div>
  );
}

export default ProductForm;
