import React, { useState } from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: "",
  });

  function handleInput(e) {
    setData({
      ...data,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    let errors = {};

    if (!data.name || data.name.trim() === "") {
      errors.name = "Name is required";
    }
    if (!data.username || data.username.trim() === "") {
      errors.username = "Username is required";
    }
    if (!data.email || data.email.trim() === "") {
      errors.email = "Email is required";
    }
    if (!data.mobile || data.mobile.trim() === "") {
      errors.mobile = "Mobile is required";
    }
    if (!data.checkbox) {
      errors.checkbox = "Checkbox is required";
    }

    setErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    } else {
      alert("Form Submitted Sucessfully!");
      localStorage.setItem("user", JSON.stringify(data));
      setData({
        name: "",
        username: "",
        email: "",
        mobile: "",
        checkbox: false,
      });
      navigate("/selection");
    }
  }

  return (
    <header className={styles.header}>
      <section className={styles.heroImgContainer}>
        <img
          src="https://images.unsplash.com/photo-1541500792866-07f25e0c8578?q=80&w=2807&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </section>
      <section className={styles.heroSignUp}>
        <h1 className={styles.appTitle}>Super App</h1>
        <p className={styles.subTitle}>Create your new account</p>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <div className={styles.inputField}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              id="name"
              value={data.name}
              onChange={handleInput}
            />
            <label htmlFor="name">Name</label>
          </div>
          <span>{errors.name}</span>

          <div className={styles.inputField}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              id="username"
              value={data.username}
              onChange={handleInput}
            />
            <label htmlFor="username">Username</label>
          </div>
          <span>{errors.username}</span>

          <div className={styles.inputField}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              value={data.email}
              onChange={handleInput}
            />
            <label htmlFor="email">Email</label>
          </div>
          <span>{errors.email}</span>

          <div className={styles.inputField}>
            <input
              type="tel"
              placeholder="Mobile number"
              name="mobile"
              id="mobile"
              maxLength={10}
              value={data.mobile}
              onChange={handleInput}
            />
            <label htmlFor="mobile">Mobile number</label>
          </div>
          <span>{errors.mobile}</span>

          <div className={styles.checkerContainer}>
            <div className={styles.checker}>
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                value={data.checkbox}
                onChange={handleInput}
              />
              <label htmlFor="checkbox">
                Share my registration data with Superapp
              </label>
            </div>
            <span>{errors.checkbox}</span>
          </div>

          <button className={styles.signUpBtn}>Sign Up</button>

          <p className={styles.terms}>
            By clicking on Sign up. you agree to Superapp{" "}
            <span>Terms and Conditions of Use</span>
          </p>

          <p className={styles.terms}>
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp <span>Privacy Policy</span>
          </p>
        </form>
      </section>
    </header>
  );
};

export default Home;
