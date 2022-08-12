import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';


import styles from './SearchBox.module.css'

const SearchBox = ({allData, onSearch}) => {

  const [userInput, setUserInput] = useState('')

  const searchHandler = e => {
    setUserInput(e.target.value)
  }

  useEffect(() => {
    const searchTimeout = setTimeout(() => {
      const newData = allData?.filter(product => product.title.toLowerCase().includes(userInput.toLowerCase()))
      onSearch(newData)
      }, 500)
    return (() => clearTimeout(searchTimeout))
  },[userInput,onSearch,allData])

  return (
    <div className={styles.search}>
        <TextField value={userInput} onChange={searchHandler} fullWidth label="Search Products ..." id="fullWidth" />
    </div>
  )
}

export default SearchBox