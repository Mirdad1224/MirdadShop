import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/pngegg.png";
import { MdOutlineDarkMode, MdLogin } from "react-icons/md";
import { BsSun, BsBookmarkHeartFill } from "react-icons/bs";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import {IconButton, Tooltip, Badge} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { themeActions } from "../../store/index";
import { authActions } from "../../store/index";


import styles from "./Navbar.module.css";

const Navbar = () => {
  const themeState = useSelector((state) => state.theme.isLight);
  const authState = useSelector((state) => state.auth.isAuthenticated);
  const basketState = useSelector((state) => state.basket.counter);
  const dispatch = useDispatch();

  const themeHandler = () => {
    dispatch(themeActions.themeToggle());
  };

  const logoutHandler = (e) => {
    dispatch(authActions.logout());
  };

  return (
    <nav className={`${styles.navbar} ${themeState ? '' : styles.dark}`}>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>

      <div className={`${styles.icons} ${themeState ? '' : styles.darkIcons}`}>
        {themeState && (
          <Tooltip onClick={themeHandler} title="DarkMode">
            <IconButton>
              <MdOutlineDarkMode />
            </IconButton>
          </Tooltip>
        )}
        {!themeState && (
          <Tooltip onClick={themeHandler} title="LightMode">
            <IconButton>
              <BsSun />
            </IconButton>
          </Tooltip>
        )}

        <Link to="favorate">
          <Tooltip title="Favorate">
            <IconButton>
              <BsBookmarkHeartFill />
            </IconButton>
          </Tooltip>
        </Link>
        <Link to="/cart">
          <Tooltip title="Cart">
            <Badge showZero badgeContent={basketState} color="primary" className={styles.badge}>
              <IconButton>
                <MdOutlineAddShoppingCart />
              </IconButton>
            </Badge>
          </Tooltip>
        </Link>
        {!authState && (
          <Link to="signup">
            <Tooltip title="Login/SignUp">
              <IconButton>
                <MdLogin />
              </IconButton>
            </Tooltip>
          </Link>
        )}
        {authState && (
          <Link to="/" onClick={logoutHandler}>
            Logout
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
