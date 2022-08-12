import React from 'react'
import { useSelector } from "react-redux";

import styles from './Footer.module.css'

const Footer = () => {
  const themeState = useSelector((state) => state.theme.isLight);
  return (
    <footer className={`${styles.footer} ${themeState ? '' : styles.dark}`}>
        <p> © 2022 All Copyright Resarved. Made By Ali Mirdad</p>
    </footer>
  )
}

export default Footer