import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import classes from "./Register.module.css";

// Lấy dữ liệu
const getFromStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
// Lưu dữ liệu
const saveToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const RegisterPage = () => {
  const navigate = useNavigate();

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const phoneRef = useRef();

  // const nameInput = nameRef.current.value;
  // const emailInput = emailRef.current.value;
  // const passwordInput = passwordRef.current.value;
  // const phoneInput = phoneRef.current.value;

  // Lấy dữ liêu từ localstorage
  const userArr = getFromStorage("userArr") ? getFromStorage("userArr") : [];

  // Submit dữ liệu
  const submitHandler = (event) => {
    event.preventDefault();

    // console.log(nameInput, emailInput, passwordInput, phoneInput);
    // Validate input
    // Khi user nhập không đủ dữ liệu
    // if (
    //   nameInput === "" ||
    //   emailInput === "" ||
    //   passwordInput === "" ||
    //   phoneInput === ""
    // ) {
    //   alert("All information need to be filled!");
    //   return;
    // }

    // // Khi email không trùng với các tài khoản đã có
    // let isEmailAvailable = userArr.find((user) => user.email === emailInput);

    // if (isEmailAvailable) {
    //   alert("Email is unavailable!");
    //   return;
    // }

    // // // Khi password ít hơn 8 kí tự
    // if (passwordInput.trim().length <= 8) {
    //   alert("Password need more then 8 characters!");
    //   return;
    // }

    // const newUser = {
    //   name: nameInput,
    //   email: emailInput,
    //   password: passwordInput,
    //   phone: phoneInput,
    // };

    // //Thêm thông tin người dùng vào userArr
    // userArr.push(newUser);

    // Lưu vào local Storage
    saveToStorage("userArr", userArr);

    navigate("/login");
  };

  return (
    <div className={classes.container}>
      <div className={classes.signUpContainer}>
        <h1>Sign Up</h1>
        <form className={classes.formcontrol} onSubmit={submitHandler}>
          <input type="text" placeholder="Full Name" ref={nameRef} />
          <input type="email" placeholder="Email" ref={emailRef} />
          <input type="password" placeholder="Password" ref={passwordRef} />
          <input type="text" placeholder="Phone" ref={phoneRef} />
          <button>SIGN UP</button>
        </form>
        <p>
          Login?<Link to="/login">Click</Link>
        </p>
      </div>
    </div>
  );
};
export default RegisterPage;
