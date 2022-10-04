import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getFromStorage, saveToStorage } from "../../lib/storage";
import { loginActions } from "../../store/login";
import { useDispatch } from "react-redux";
import classes from "./LoginPage.module.css";
const LoginPage = () => {
  const navigate = useNavigate();

  const emailRef = useRef();
  const [passwordInput, setPasswordInput] = useState("");

  const dispatch = useDispatch();
  // const isLogin = useSelector((state) => state.login.isLogin);

  const submitHandler = (event) => {
    event.preventDefault();
    // Lấy giá trị từ input
    const emailInput = emailRef.current.value;

    // Validate input
    // Khi user nhập không đủ dữ liệu
    if (emailInput === "" || passwordInput === "") {
      alert("All information need to be filled!");
      return;
    }

    // Lấy dữ liêu từ localstorage
    const userArr = getFromStorage("userArr") ? getFromStorage("userArr") : [];

    // Tìm user trong mảng userArr xem đã có đăng ký chưa
    const foundUser = userArr.find(
      (user) => user.email === emailInput && user.password === passwordInput
    );

    // Thông báo cho người dùng khi không tìm thấy thông tin user
    if (!foundUser) {
      alert(`Can not find user's information! Please create an account.`);

      // reset lại form input password
      setPasswordInput("");
    } else {
      // Thông báo đăng nhập thành công
      alert("Logged in successfully!");

      // Cập nhật thông tin đăng nhập vào redux
      dispatch(loginActions.login());

      // Cập nhật thông tin người dùng hiện tại vào localStorage
      saveToStorage("currentUser", foundUser);

      // Chuyển đến trang chủ
      navigate("/");
    }
  };

  const passwordChangeHandler = (event) => {
    setPasswordInput(event.target.value);
  };

  return (
    <div className={classes.container}>
      <div className={classes.signInContainer}>
        <h1>Sign In</h1>
        <form className={classes.formcontrol} onSubmit={submitHandler}>
          <input type="email" placeholder="Email" ref={emailRef} />
          <input
            type="password"
            placeholder="Password"
            value={passwordInput}
            onChange={passwordChangeHandler}
          />
          <button>SIGN IN</button>
        </form>
        <p>
          Create an account? <Link to="/register">Click</Link>
        </p>
      </div>
    </div>
  );
};
export default LoginPage;
