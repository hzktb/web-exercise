import React, { useState } from "react";

function ContactForm(props) {
  const { selected, setSelected } = props;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactReason, setContactReason] = useState("");
  const [feedback, setFeedback] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [feedbackError, setFeedbackError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleEmailValidate = () => {
    let emailRegex =
      /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
    if (emailRegex.test(email)) {
      setEmailError("");
    } else {
      setEmailError("Please enter a valid email");
    }
  };

  const handleRadioOnChange = (e) => {
    setContactReason(e.target.value);
  };

  return (
    <div
      className={`mt-5 container form ${selected === "contact" ? "show" : ""}`}
    >
      <h4 className="row">Contact Us</h4>
      <form onSubmit={handleSubmit} className="p-5 row">
        <label htmlFor="name">
          Name:
          <br />
          <input
            className="form-control"
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            onBlur={() => {
              name.length < 1
                ? setNameError("Name cannot be empty")
                : setNameError("");
            }}
            required
          />
          <small className="error">{nameError}</small>
        </label>
        <br />
        <label htmlFor="email">
          Email:
          <br />
          <input
            className="form-control"
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => handleEmailValidate()}
            required
          />
          <small className="error">{emailError}</small>
        </label>
        <div onChange={handleRadioOnChange}>
          Contack Reason:
          <br />
          <input
            type="radio"
            value="Order Question"
            name="contactReason"
            required
          />{" "}
          Order Question
          <br />
          <input
            type="radio"
            value="Website Feedback"
            name="contactReason"
          />{" "}
          Website Feedback
          <br />
          <input
            type="radio"
            value="Trouble Finding Product"
            name="contactReason"
            onClick={() => setSelected("product")}
          />{" "}
          Trouble Finding Product (this will direct you to our product
          suggestion form)
        </div>

        <label htmlFor="feedback">
          Feedback:
          <br />
          <textarea
            className="form-control"
            name="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            onBlur={() => {
              name.length < 1
                ? setFeedbackError("Feedback cannot be empty")
                : setFeedbackError("");
            }}
            required
          ></textarea>
          <small className="error">{feedbackError}</small>
        </label>
        <br />
        <input type="submit" value="Submit" className="submit" />
      </form>
    </div>
  );
}

export default ContactForm;
