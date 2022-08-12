import React, { useCallback, useEffect, useState } from "react";
import SearchBox from '../../components/Search/SearchBox'
import {Button, Stack, Skeleton} from "@mui/material";
import useHttp from "../../hooks/useHttp";
import Products from "../Products/Products";

import styles from "./Category.module.css";


const categoryURL = "https://fakestoreapi.com/products";

const Category = () => {
  const [productsArray, setProductsArray] = useState(null);
  const [filteredArray, setFilteredArray] = useState(null);
  const [currentTab, setCurrentTab] = useState('all');
  const screenWidth = useState(window.innerWidth <= 768)[0];

  const { isLoading, error, sendRequest } = useHttp();

  const applyData = useCallback((data) => {
    setProductsArray(data);
    setFilteredArray(data)
  }, []);

  useEffect(() => {
    sendRequest({ url: categoryURL }, applyData);
  }, [sendRequest, applyData]);

  const categoryHandler = (e) => {
    let name = e.target.name;
    if (name === "all") {
        setFilteredArray(productsArray)
        setCurrentTab('all')
    } else if (name === "elec") {
      setFilteredArray(
        productsArray.filter((product) => product.category === "electronics")
      );
      setCurrentTab('elec')
    } else if (name === "jewel") {
      setFilteredArray(
        productsArray.filter((product) => product.category === "jewelery")
      );
      setCurrentTab('jewel')
    } else if (name === "men") {
      setFilteredArray(
        productsArray.filter((product) => product.category === "men's clothing")
      );
      setCurrentTab('men')
    } else if (name === "women") {
      setFilteredArray(
        productsArray.filter((product) => product.category === "women's clothing")
      );
      setCurrentTab('women')
    }
  };

  const filterHandler = useCallback(filteredData => {
    setFilteredArray(filteredData)
  },[])

  return (
    <section className={styles.category}>
        <SearchBox allData={productsArray} onSearch={filterHandler} />
      <Stack direction={screenWidth ? 'column' : 'row'} spacing={3}>
        <Button name="all" onClick={categoryHandler} className={currentTab === 'all' ? styles.active : ''}>
          All Products
        </Button>
        <Button name="elec" onClick={categoryHandler} className={currentTab === 'elec' ? styles.active : ''}>
          Electronics
        </Button>
        <Button name="jewel" onClick={categoryHandler} className={currentTab === 'jewel' ? styles.active : ''}>
          Jewelery
        </Button>
        <Button name="men" onClick={categoryHandler} className={currentTab === 'men' ? styles.active : ''}>
          Men's Clothing
        </Button>
        <Button name="women" onClick={categoryHandler} className={currentTab === 'women' ? styles.active : ''}>
          Women's Clothing
        </Button>
      </Stack>
      {error && <p>{error}</p>}
      {isLoading && <Skeleton variant="rectangular" width={700} height={500} />}
      {!error && !isLoading && filteredArray && (
        <Products allProducts={filteredArray} />
      )}
    </section>
  );
};

export default Category;
