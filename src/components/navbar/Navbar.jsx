import React from 'react'
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <img alt="logo" src="https://animension.to/assets/images/logo.png" width={200} height={50}/>
      <div className={styles.search}>
        <input type="text" className={styles.searchInput}/>
        <img alt="search button" src="https://animension.to/assets/images/search.svg" className={styles.searchimg}/>
      </div>
      <ul className={styles.links}> 
        <li>Popular</li>
        <li>AZ List</li>
        <li>Genres</li>
        <li>Seasons</li>
        <li>Schedule</li>
        <li>Popular</li>
        <li>My Account</li>
        <li><img src="https://animension.to/assets/images/random.svg" alt="random" height={15}/></li>
      </ul>
    </div>
  )
}

export default Navbar