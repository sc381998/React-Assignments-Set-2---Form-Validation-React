import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    gender: "male",
    phone: "",
    password: ""
  });
  const [username, setUsername] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  function handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    setFields((prevValue) => {
      return { ...prevValue, [name]: value };
    });
    // console.log(fields);
  }
  function submitForm(event) {
    // console.log(fields.email.substring(0, fields.email.indexOf("@")));
    event.preventDefault();
    // console.log("sfsagg");

    if (
      !fields["name"] ||
      !fields["email"] ||
      !fields["gender"] ||
      !fields["phone"] ||
      !fields["password"]
    ) {
      setError("All fields are mandatory");
    } else if (!fields["name"].match(/^[a-zA-Z]+$/)) {
      setError("Name is not alphanumeric");
    } else if (!fields["email"].includes("@")) {
      setError("Email must contain @");
    } else if (!true) {
      setError("Please identify as male, female or others");
    } else if (isNaN(fields["phone"])) {
      setError("Phone Number must contain only numbers");
    } else if (fields["password"].length < 6) {
      setError("Password must contain atleast 6 letters");
    } else {
      setShow(true);
      setUsername(fields.email.substring(0, fields.email.indexOf("@")));
      setError("");
      setFields({
        name: "",
        email: "",
        gender: "",
        phone: "",
        password: ""
      });
    }
  }
  // console.log(error);
  return (
    <div id="main">
      <form id="login-form">
        <input
          data-testid="name"
          type="text"
          name="name"
          placeholder="Enter name"
          onChange={handleChange}
          value={fields.name}
        />
        {/* {error.nameError ? (
          <span style={{ color: "red" }}>Name is not alphanumeric</span>
        ) : (
          ""
        )} */}

        <input
          data-testid="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
          value={fields.email}
        />
        {/* {error.emailError && (
          <span style={{ color: "red" }}>Email must contain @</span>
        )} */}

        <input
          data-testid="gender"
          type="radio"
          onChange={handleChange}
          defaultChecked
          name="gender"
          value="male"
        />
        <label htmlFor="male">male</label>
        <input
          data-testid="gender"
          type="radio"
          onChange={handleChange}
          name="gender"
          value="female"
        />
        <label htmlFor="female">female</label>
        <input
          data-testid="gender"
          type="radio"
          onChange={handleChange}
          name="gender"
          value="other"
        />
        <label htmlFor="other">other</label>
        {/* {error.genderError && (
          <span style={{ color: "red" }}>
            Please identify as male, female or others
          </span>
        )} */}

        <input
          data-testid="phoneNumber"
          type="number"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          value={fields.phone}
        />
        {/* {error.phoneError && (
          <span style={{ color: "red" }}>
            Phone Number must contain only numbers
          </span>
        )} */}

        <input
          data-testid="password"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={fields.password}
        />
        {/* {error.passwordError && (
          <span style={{ color: "red" }}>
            Password must contain atleast 6 letters
          </span>
        )} */}

        <button
          data-testid="submit"
          className="btn btn-primary btn-block"
          onClick={submitForm}
        >
          Signup
        </button>
      </form>
      <h1>{error.length !== 0 ? error : show && `Hello ${username}`}</h1>
    </div>
  );
};

export default App;
