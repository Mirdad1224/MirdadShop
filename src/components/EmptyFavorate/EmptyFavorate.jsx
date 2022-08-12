import React from "react";
import EmptyFavorateImage from "../../assets/images/favorate.jpg";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import styles from "./EmptyFavorate.module.css";

const EmptyFavorate = () => {
  return (
    <main className={styles.empty}>
      <div className={styles.favorateImage}>
        <img src={EmptyFavorateImage} alt="" />
      </div>
      <div className={styles.favorateDesc}>
        <p>
          Your Wishlist is currently empty. Be sure to fill your Wishlist with
          something you like by clicking on the heart icon and view them here
          before you checkout.
        </p>
        <Link to="/">
          <Button variant="contained" size="large" color="secondary">
            Go To Shop
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default EmptyFavorate;
