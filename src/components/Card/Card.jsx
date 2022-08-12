import React, { useState } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { BsBookmarkHeart, BsBookmarkHeartFill, BsArrowRightShort } from "react-icons/bs";
import {Button, Tooltip, IconButton, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { basketActions } from "../../store/index";
import { favorateActions } from "../../store/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./Card.module.css";

const Card = ({ cardInfo }) => {
  const themeState = useSelector((state) => state.theme.isLight);
  const dispatch = useDispatch();
  const favorateState = useSelector((state) => state.favorate.favorateItems);
  const [isInFavorate, setIsInFavorate] = useState(
    favorateState.find((item) => item.id === cardInfo.id)
  );

  const addToCartHandler = (product) => {
    const cartItem = {
      id: product.id,
      image: product.image,
      title: product.title,
      price: product.price,
      quantity: 1,
      totalItemPrice: product.price,
    };
    dispatch(basketActions.addToBasket(cartItem));
    toast.success("Added To Cart! ", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const addToFavorateHandler = (product) => {
    setIsInFavorate(true);
    const cartItem = {
      id: product.id,
      image: product.image,
      title: product.title,
      price: product.price,
      rating: {rate: product.rating.rate}
    };
    dispatch(favorateActions.addToFavorate(cartItem));
  };

  const removeFromFavorateHandler = (productId) => {
    setIsInFavorate(false);
    dispatch(favorateActions.removeFromFavorate(productId));
  };

  return (
    <div className={`${styles.card} ${themeState ? '' : styles.dark}`}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <img src={cardInfo.image} alt="" />
      <h4>{cardInfo.title}</h4>
      <div className={styles.interaction}>
        <Link to={`/product/${cardInfo.id}`}>
          <Button variant="contained" color="success" endIcon={<BsArrowRightShort />}>
            More Info
          </Button>
        </Link>
        {isInFavorate && (
          <Tooltip
            onClick={() => removeFromFavorateHandler(cardInfo.id)}
            title="Remove From Favorate"
            placement="top-start"
            arrow
          >
            <IconButton>
              <BsBookmarkHeartFill className={styles.favorate} />
            </IconButton>
          </Tooltip>
        )}
        {!isInFavorate && (
          <Tooltip
            onClick={() => addToFavorateHandler(cardInfo)}
            title="Add To Favorate"
            placement="top-start"
            arrow
          >
            <IconButton>
              <BsBookmarkHeart className={styles.favorate} />
            </IconButton>
          </Tooltip>
        )}
      </div>
      <Rating value={cardInfo.rating.rate} precision={0.5} readOnly />
      <div className={styles.price}>
        <span>${cardInfo.price}</span>
        <Tooltip
          onClick={() => addToCartHandler(cardInfo)}
          title="Add To Cart"
          placement="top-start"
          arrow
        >
          <IconButton>
            <MdOutlineAddShoppingCart className={styles.basket} />
          </IconButton>
        </Tooltip>
        
      </div>
    </div>
  );
};

export default Card;
