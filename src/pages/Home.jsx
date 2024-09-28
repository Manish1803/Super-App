import React from "react";
import styles from "./Home.module.css";

const Home = () => {
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
        <form action="" className={styles.formContainer}>
          <div className={styles.inputField}>
            <input type="text" placeholder="Name" name="name" id="name" />
            <label htmlFor="name">Name</label>
          </div>
          <span></span>

          <div className={styles.inputField}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              id="username"
            />
            <label htmlFor="username">Username</label>
          </div>
          <span></span>

          <div className={styles.inputField}>
            <input type="email" placeholder="Email" name="email" id="email" />
            <label htmlFor="email">Email</label>
          </div>
          <span></span>

          <div className={styles.inputField}>
            <input
              type="text"
              placeholder="Mobile number"
              name="mobile"
              id="mobile"
              maxLength={10}
            />
            <label htmlFor="mobile">Mobile number</label>
          </div>
          <span></span>

          <div className={styles.checkerContainer}>
            <div className={styles.checker}>
              <input type="checkbox" name="checkbox" id="checkbox" />
              <label htmlFor="checkbox">
                Share my registration data with Superapp
              </label>
            </div>
            <span></span>
          </div>

          <button type="submit" className={styles.signUpBtn}>
            Sign Up
          </button>

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
