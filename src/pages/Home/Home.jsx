import React from 'react'
import Category from '../../components/Category/Category'


import styles from './Home.module.css'

const Home = () => {
  return (
    <main className={styles.home}>
      <Category />
    </main>
  )
}

export default Home