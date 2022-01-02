import styles from '../styles/home.module.css'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Sidebar from '../components/nav/sidebar';
import Image from 'next/image'

const Home = () => {
  const router = useRouter();
  const cookie = "auth=congratsyougotintoourweddingwebsite";

  useEffect(() => {
    const initialCookies = document.cookie.split(';');
    if (!initialCookies.includes(cookie)) {
      router.push("/");
    }
  }, []);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.sidebarContainer}>
        <div className={styles.topLeftContainer}>
          <h2 className={styles.topLeftText}>{"Brandon & Ellen"}</h2>
        </div>
        <Sidebar/>
      </div>
    </div>
  )
}

export default Home;
