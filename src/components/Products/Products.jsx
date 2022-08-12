import React from 'react'
import Card from '../Card/Card'


import styles from './Products.module.css'

const Products = ({allProducts}) => {
  return (
    <div className={styles.products}>
        {allProducts.map(product => (<Card key={product.id} cardInfo={product} />))}
    </div>
  )
}

export default Products