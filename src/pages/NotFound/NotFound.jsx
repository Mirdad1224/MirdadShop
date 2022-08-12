import React from 'react'
import NotFoundImage from '../../assets/images/404.jpg'


import styles from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <img src={NotFoundImage} alt="" />
    </div>
  )
}

export default NotFound