import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {Button, Tooltip, IconButton} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { basketActions } from "../../store/index";

import styles from "./BasketCard.module.css";

const Card = ({ cardInfo }) => {
  const dispatch = useDispatch();
  const themeState = useSelector((state) => state.theme.isLight);

  const addToCartHandler = (productId) => {
    dispatch(basketActions.increaseQuantity(productId));
  };

  const decreseHandler = (productId) => {
    dispatch(basketActions.decreseQuantity(productId));
  };
  const clearItemHandler = (productId) => {
    dispatch(basketActions.clearItemFromBasket(productId));
  };

  return (
    <div className={`${styles.card} ${themeState ? '' : styles.dark}`}>
      <img src={cardInfo.image} alt="" />
      <h4>{cardInfo.title}</h4>
      <Link to={`/product/${cardInfo.id}`} className={styles.interaction}>
        <Button variant="contained" color="success" endIcon={<BsArrowRightShort />}>
          More Info
        </Button>
      </Link>
      <div className={styles.buttons}>
        <div className={styles.quantity}>
          <Tooltip
            onClick={() => decreseHandler(cardInfo.id)}
            title="Minus Quantity"
            placement="top-start"
            arrow
          >
            <IconButton>
              <FiMinusCircle className={`${styles.basket} ${themeState ? '' : styles.darkBasket}`} />
            </IconButton>
          </Tooltip>
          <span>{cardInfo.quantity}</span>
          <Tooltip
            onClick={() => addToCartHandler(cardInfo.id)}
            title="Add Quantity"
            placement="top-start"
            arrow
          >
            <IconButton>
              <FiPlusCircle className={`${styles.basket} ${themeState ? '' : styles.darkBasket}`} />
            </IconButton>
          </Tooltip>
        </div>
        <Tooltip
          onClick={() => clearItemHandler(cardInfo.id)}
          title="Remove From cart"
          placement="top-start"
          arrow
        >
          <IconButton>
            <AiOutlineCloseCircle className={`${styles.basket} ${themeState ? '' : styles.darkBasket}`} />
          </IconButton>
        </Tooltip>
      </div>

      <span className={styles.total}>Total Price: {cardInfo.totalItemPrice.toFixed(2)}</span>
    </div>
  );
};

export default Card;
