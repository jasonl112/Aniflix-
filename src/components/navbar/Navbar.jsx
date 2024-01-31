import React from 'react'
import styles from "./Navbar.module.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
      <img alt="logo" src="https://animension.to/assets/images/logo.png" width={200} height={50}/>
      </Link>
      
      <div className={styles.search}>
        <input type="text" className={styles.searchInput}/>
        <img alt="search button" src="https://animension.to/assets/images/search.svg" className={styles.searchimg}/>
      </div>
      <div className={styles.links}> 
        <div className={styles.link}>Popular</div>
        <div className={styles.link}>AZ List</div>
        <div className={styles.link}>Genres</div>
        <div className={styles.link}>Seasons</div>
        <div className={styles.link}>Schedule</div>
        <div className={styles.link}>Popular</div>
        <div className={styles.link}>My Account</div>
        <div className={styles.link}><img src="https://animension.to/assets/images/random.svg" alt="random" height={15}/></div>
      </div>
    </div>
  )
}

export default Navbar