import React from 'react'
import styles from "./Content.module.css"
import AnimeList from '../animelist/AnimeList'
import AnimeSideBar from '../animesidebar/AnimeSideBar'

const Content = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.title}>
        <h1>Recent Updates</h1>
      </div>
      <div className={styles.title}>
        <h1>New & Hot</h1>
      </div>
        <div className={styles.wrapper}>
          <AnimeList/>
        </div>
        <div className={styles.sideBar}>
            <AnimeSideBar/>
        </div>
    </div>
  )
}

export default Content