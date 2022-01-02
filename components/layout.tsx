import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/home.module.css'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export interface LayoutProps {
  children: any;
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div className={styles.navContainer}>
      {children}
    </div>
  )
}

export default Layout;
