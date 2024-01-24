import React from 'react'
import Featured from '../featured/Featured'
import styles from "./Main.module.css"

const Main = () => {
  return (
    <div className={styles.main}>
      <Featured/>
    </div>
  )
}

export default Main