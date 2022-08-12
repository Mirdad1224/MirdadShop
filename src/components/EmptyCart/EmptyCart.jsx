import React from "react";
import EmptyBasket from "../../assets/images/basket.jpg";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import styles from './EmptyCart.module.css'

const EmptyCart = () => {
  return (
    <main className={styles.emptyCart}>
      <div className={styles.cartImage}>
        <img src={EmptyBasket} alt="" />
      </div>
      <div className={styles.cartDesc}>
        <p>
          Your bag is empty! Don’t miss the joy of the shopping experience with
          our shop
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

export default EmptyCart;
