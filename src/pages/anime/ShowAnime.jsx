import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import styles from "./ShowAnime.module.css"
import AnimeList from '../../components/animelist/AnimeList'
import AnimeSideBar from '../../components/animesidebar/AnimeSideBar'

const ShowAnime = () => {
  return (
    <div className={styles.main}>
      <Navbar/>
      <div className={styles.grid}>
        <div className={styles.title}>
          <h1>Home &gt; Ishura</h1>
        </div>
        <div className={styles.title}>
          <h1>New & Hot</h1>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.heroImg}>
            <div className={styles.overlay}></div>
          </div>
          <div className={styles.content}>
            <div className={styles.info}>
              <img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx21-tXMN3Y20PIL9.jpg" alt="logo" />
              <div>
                <h2>MAL Score 8.71</h2>
                <div>Rating Bar</div>
              </div>
              <div className={styles.bookmark}>
                Book Mark
              </div>
            </div>
            <div className={styles.stats}>
              <h1>One Piece</h1>
              <ul>
                <li>Status: Ongoing</li>
                <li>Season: Fall 1999</li>
              </ul>
              <div>
                Genres:
                <div className={styles.genres}>
                  <div className={styles.genre}>Action</div>
                  <div className={styles.genre}>Adventure</div>
                </div>
              </div>
              <div className={styles.counter}> New Episode in:</div>
              <p>
              One Piece is a story about  Monkey D. Luffy, who wants to become a sea-robber. In a world mystical, there have a mystical fruit whom eat will have a special power but also have greatest weakness. Monkey ate Gum-Gum Fruit which gave him a strange power but he can NEVER swim. And this weakness made his dream become a sea – robber to find ultimate treasure is difficult. One Piece is a story about  Monkey D. Luffy, who wants to become a sea-robber. In a world mystical, there have a mystical fruit whom eat will have a special power but also have greatest weakness. Monkey ate Gum-Gum Fruit which gave him a strange power but he can NEVER swim. And this weakness made his dream become a sea – robber to find ultimate treasure is difficult. But along his ways, he meet himself many members to help. Together, they sail the Seven Seas of adventure in search of the elusive treasure “One Piece.”
              </p>
            </div>

          </div>
        </div>
        <div className={styles.sideBar}>
            <AnimeSideBar/>
        </div>
        <div className={styles.title}>
          <h1>New & Hot</h1>
        </div>
        <div className={styles.sideBar}>
          <AnimeSideBar/>
        </div>
        <div className={styles.title}>
          <h1>New & Hot</h1>
        </div>
        <div className={styles.sideBar}>
          <AnimeSideBar/>
        </div>
      </div>
    </div>
  )
}

export default ShowAnime