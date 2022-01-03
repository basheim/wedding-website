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
    <div className="home-container">
      <div className="sidebar-container">
        <div className="top-left-container">
          <h2 className="top-left-text">{"Brandon & Ellen"}</h2>
        </div>
        <Sidebar/>
      </div>
      <div className="layout-container">
        <Layout/>
      </div>
    </div>
  )
}

export default Home;
