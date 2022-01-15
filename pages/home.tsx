import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Sidebar from '../components/nav/sidebar';
import Layout from '../components/layout';
import React from 'react';

const Home = () => {
  const router = useRouter();
  const cookie = "auth=congratsyougotintoourweddingwebsite";
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  function handleMobileClick() {
    setOpenMobileMenu(!openMobileMenu);
  }

  useEffect(() => {
    const initialCookies = document.cookie.split(';');
    if (!initialCookies.includes(cookie)) {
      router.push("/");
    }
  }, []);

  return (
    <React.Fragment>
      <div className="home-container">
        <div className="mobile-button">
          <div className="mobile-icon" onClick={handleMobileClick}>
            <svg width="100%" height="100%">
              <rect x="0%" y="20%" width="100%" height="7%" fill="#f7e5d9" />
              <rect x="0%" y="50%" width="100%" height="7%" fill="#f7e5d9" />
              <rect x="0%" y="80%" width="100%" height="7%" fill="#f7e5d9" />
            </svg>
          </div>
        </div>
        <div className="sidebar-container">
          <div className="top-left-container">
            <h2 className="top-left-text">{"Brandon & Ellen"}</h2>
          </div>
          <Sidebar />
        </div>
        <div className="layout-container">
          <div className="mobile-break row" />
          <Layout />
        </div>
        <div className="mobile-sidebar" style={{top: openMobileMenu ? "0" : "-100vh"}}>
          <div className="mobile-icon x" onClick={handleMobileClick}>
            <svg width="100%" height="100%">
              <line x1="10%" y1="10%" x2="90%" y2="90%" stroke="#f7e5d9" strokeWidth="15%" />
              <line x1="10%" y1="90%" x2="90%" y2="10%" stroke="#f7e5d9" strokeWidth="15%" />
            </svg>
          </div>
          <div className="mobile-sidebar-container">
            <Sidebar onClickEffect={handleMobileClick} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home;
