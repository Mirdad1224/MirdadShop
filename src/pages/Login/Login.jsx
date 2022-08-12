import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import LoginImage from "../../assets/images/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import {authActions} from '../../store/index'

import styles from "./Login.module.css";
import { Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

const initialValues = {
  email: "",
  password: "",
};



const validationSchema = Yup.object({
  email: Yup.string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
  password: Yup.string()
    .min(8, "At Least 8 Character")
    .required("Password is required"),
});

const Login = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onSubmit = (values) => {
    dispatch(authActions.login())
    navigate('/')
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  const [isLogin, setIsLogin] = useState(false);
  const toggleLoginHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <main className={styles.login}>
      <div className={styles.loginImage}>
        <img src={LoginImage} alt="" />
      </div>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <h3>{isLogin ? "Login" : "SignUp"}</h3>
        <TextField
          {...formik.getFieldProps("email")}
          name="email"
          type="text"
          id="standard-basic"
          label="Email"
          variant="standard"
        />
        {formik.errors.email && formik.touched.email && (
          <Typography variant="p" color='red'>{formik.errors.email}</Typography>
        )}
        <TextField
          {...formik.getFieldProps("password")}
          name="password"
          type="password"
          id="standard-basic"
          label="Password"
          variant="standard"
        />
        {formik.errors.password && formik.touched.password && (
          <Typography variant="p" color='red'>{formik.errors.password}</Typography>
        )}
        <Button
          type="submit"
          variant="contained"
          color="success"
          disabled={!formik.isValid}
        >
          {isLogin ? "Login" : "SignUp"}
        </Button>
        <Link
          className={styles.toggleButton}
          onClick={toggleLoginHandler}
          to={isLogin ? "/signup" : "/login"}
        >
          Click For {isLogin ? "SignUp" : "Login"}
        </Link>
      </form>
    </main>
  );
};

export default Login;
