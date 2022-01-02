import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Sidebar from '../components/nav/sidebar';
import Layout from '../components/layout';

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
      <div className={styles.layoutContainer}>
        <Layout/>
      </div>
    </div>
  )
}

export default Home;
