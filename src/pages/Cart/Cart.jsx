import React from "react";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import BasketCard from "../../components/BasketCard/BasketCard";

import { useSelector } from "react-redux";

import styles from "./Cart.module.css";
import { Button } from "@mui/material";

const Cart = () => {
  const basketState = useSelector((state) => state.basket);

  const isEmpty = basketState.counter === 0;

  return (
    <>
      {isEmpty && <EmptyCart />}

      {!isEmpty && (
        <main className={styles.cartWrapper}>
          {basketState.basketItems.map((product) => (
            <BasketCard key={product.id} cardInfo={product} />

          ))}
          <div className={styles.total}>
            <Button variant="outlined" color="success" size="large" >Total Cart Price : $ {basketState.totalPrice.toFixed(2)}</Button>
          </div>
        </main>
      )}
    </>
  );
};

export default Cart;
