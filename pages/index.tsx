import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Wedding Website TBD
        </h1>
        <div className={styles.mainImage}>
          <Image src="/profile.jpg" width={300} height={300}/>
        </div>
      </main>
    </div>
  )
}

export default Home
