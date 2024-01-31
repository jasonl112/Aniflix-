import React from 'react'
import styles from "./AnimeList.module.css"
import { Link } from 'react-router-dom'

const AnimeList = () => {
  return (
    <div className={styles.wrapper}>
      <Link to="/details/123">
        <div className={styles.animeCard}>
          <div className={styles.animeImgContainer}>
            <div className={styles.overlay}>
              <img src="https://animension.to/assets/images/play-circle-o.svg" alt="playicon" />
            </div>
          </div>
          <h1 className={styles.animeTitle}>One Piece</h1>  
        </div>
      </Link>
      
      <div className={styles.animeCard}>
        <div className={styles.animeImgContainer}>
          <div className={styles.overlay}>
            <img src="https://animension.to/assets/images/play-circle-o.svg" alt="playicon" />
          </div>
        </div>
        <h1 className={styles.animeTitle}>One Piece</h1>  
      </div>
      <div className={styles.animeCard}>
        <div className={styles.animeImgContainer}>
          <div className={styles.overlay}>
            <img src="https://animension.to/assets/images/play-circle-o.svg" alt="playicon" />
          </div>
        </div>
        <h1 className={styles.animeTitle}>One Piece</h1>  
      </div>
      <div className={styles.animeCard}>
        <div className={styles.animeImgContainer}>
          <div className={styles.overlay}>
            <img src="https://animension.to/assets/images/play-circle-o.svg" alt="playicon" />
          </div>
        </div>
        <h1 className={styles.animeTitle}>One Piece</h1>  
      </div>
      <div className={styles.animeCard}>
        <div className={styles.animeImgContainer}>
          <div className={styles.overlay}>
            <img src="https://animension.to/assets/images/play-circle-o.svg" alt="playicon" />
          </div>
        </div>
        <h1 className={styles.animeTitle}>One Piece</h1>  
      </div>
      <div className={styles.animeCard}>
        <div className={styles.animeImgContainer}>
          <div className={styles.overlay}>
            <img src="https://animension.to/assets/images/play-circle-o.svg" alt="playicon" />
          </div>
        </div>
        <h1 className={styles.animeTitle}>One Piece</h1>  
      </div>
      <div className={styles.animeCard}>
        <div className={styles.animeImgContainer}>
          <div className={styles.overlay}>
            <img src="https://animension.to/assets/images/play-circle-o.svg" alt="playicon" />
          </div>
        </div>
        <h1 className={styles.animeTitle}>One Piece</h1>  
      </div>
      <div className={styles.animeCard}>
        <div className={styles.animeImgContainer}>
          <div className={styles.overlay}>
            <img src="https://animension.to/assets/images/play-circle-o.svg" alt="playicon" />
          </div>
        </div>
        <h1 className={styles.animeTitle}>One Piece</h1>  
      </div>
      <div className={styles.animeCard}>
        <div className={styles.animeImgContainer}>
          <div className={styles.overlay}>
            <img src="https://animension.to/assets/images/play-circle-o.svg" alt="playicon" />
          </div>
        </div>
        <h1 className={styles.animeTitle}>One Piece</h1>  
      </div>
      <div className={styles.animeCard}>
        <div className={styles.animeImgContainer}>
          <div className={styles.overlay}>
            <img src="https://animension.to/assets/images/play-circle-o.svg" alt="playicon" />
          </div>
        </div>
        <h1 className={styles.animeTitle}>One Piece</h1>  
      </div>
      <div className={styles.animeCard}>
        <div className={styles.animeImgContainer}>
          <div className={styles.overlay}>
            <img src="https://animension.to/assets/images/play-circle-o.svg" alt="playicon" />
          </div>
        </div>
        <h1 className={styles.animeTitle}>One Piece</h1>  
      </div>
      <div className={styles.animeCard}>
        <div className={styles.animeImgContainer}>
          <div className={styles.overlay}>
            <img src="https://animension.to/assets/images/play-circle-o.svg" alt="playicon" />
          </div>
        </div>
        <h1 className={styles.animeTitle}>One Piece</h1>  
      </div>
    </div>
    
  )
}

export default AnimeList