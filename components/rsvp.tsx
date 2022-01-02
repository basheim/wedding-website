import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/home.module.css'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export interface RsvpProps {
  children: any;
}

const Rsvp = ({children}: RsvpProps) => {
  return (
    <div className={styles.navContainer}>
      {children}
    </div>
  )
}

export default Rsvp;
