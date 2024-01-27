import React from 'react'
import Featured from '../featured/Featured'
import styles from "./Main.module.css"
import Content from "../content/Content"

const Main = () => {
  return (
    <div className={styles.main}>
      <Featured/>
      <Content/>
    </div>
  )
}

export default Main