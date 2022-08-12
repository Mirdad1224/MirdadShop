import React from "react";
import EmptyFavorate from "../../components/EmptyFavorate/EmptyFavorate";
import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";

import styles from "./Favorate.module.css";

const Favorate = () => {
  const favorateState = useSelector((state) => state.favorate.favorateItems);

  return (
    <>
      {!favorateState.length && <EmptyFavorate />}
      {!!favorateState.length && (
        <main className={styles.favorateWrapper}>
          {favorateState.map((product) => (
            <Card key={product.id} cardInfo={product} />
          ))}
        </main>
      )}
    </>
  );
};

export default Favorate;
