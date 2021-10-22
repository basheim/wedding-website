import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export interface NavbarProps {
  children: any;
}

const Navbar = ({children}: NavbarProps) => {
  return (
    <div className={styles.navContainer}>
      {children}
    </div>
  )
}

export default Navbar;
