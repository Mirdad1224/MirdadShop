import React, { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import {Skeleton, Tooltip, IconButton} from "@mui/material";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { basketActions } from "../../store/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./Product.module.css";

const Product = () => {
  const [productData, setProductData] = useState(null);
  const params = useParams();
  const productURL = `https://fakestoreapi.com/products/${params.productId}`;

  const { isLoading, error, sendRequest } = useHttp();

  const applyData = useCallback((data) => {
    setProductData(data);
  }, []);

  useEffect(() => {
    sendRequest({ url: productURL }, applyData);
  }, [sendRequest, applyData, productURL]);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    const cartItem = {
      id: productData.id,
      image: productData.image,
      title: productData.title,
      price: productData.price,
      quantity: 1,
      totalItemPrice: productData.price,
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

  return (
    <main className={styles.product}>
      {error && <p>{error}</p>}
      {isLoading && <Skeleton variant="rectangular" width={700} height={500} />}
      {!error && !isLoading && productData && (
        <>
        
          <div className={styles.productImage}>
            <img src={productData.image} alt="" />
          </div>
          <div className={styles.productDesc}>
            <h2>{productData.title}</h2>
            <p>{productData.description}</p>
            <div className={styles.price}>
              <span>PRICE : ${productData.price}</span>
              <Tooltip onClick={addToCartHandler} title="Add To Cart" placement="top-start" arrow>
                <IconButton>
                  <MdOutlineAddShoppingCart
                    
                    className={styles.basket}
                  />
                </IconButton>
              </Tooltip>
            </div>
          </div>
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
        </>
      )}
    </main>
  );
};

export default Product;
