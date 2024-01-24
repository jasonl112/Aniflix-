import React from 'react'
import styles from "./Featured.module.css"

const Featured = () => {
  const background = "https://s4.anilist.co/file/anilistcdn/media/anime/banner/154587-ivXNJ23SM1xB.jpg"
  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }
    } className={styles.container}>
      <img src="https://animension.to/assets/images/slide_prev.png" className={styles.prev} alt="Prev" width={25} ></img>
      <img src="https://animension.to/assets/images/slide_next.png" className={styles.next} alt="Next" width={25}></img>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Frieren: Beyond Journey's End</h1>
        <button className={styles.heroButton}>Watch Now</button>
      </div>
    </div>
  )
}

export default Featured