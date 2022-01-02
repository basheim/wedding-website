import Image from 'next/image'
import styles from '../styles/layout.module.css'
import Countdown from './countdown';

export interface LayoutProps {}

const Layout = ({}: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <div className={styles.marker} id="home"/>
      <div className={styles.page}>
        <div className={styles.firstPageTop}>
          <div className={styles.firstPageImageContainer}>
            <Image src="/top.jpg" width="100%" height="100%" layout="responsive" objectFit="contain"/>
          </div>
          <div className={styles.firstPageTextContainer}>
            <h1 className={styles.firstPageText}>07</h1>
            <h1 className={styles.firstPageText}>16</h1>
            <h1 className={styles.firstPageText}>22</h1>
          </div>
        </div>
        <div className={styles.firstPageBottom}>
          <div className={styles.firstPageTitleContainer}>
            <h1 className={styles.firstPageTitle}>{"THE WEDDING OF BRANDON & ELLEN"}</h1>
          </div>
        </div>
      </div>
      <div className={styles.marginPage}/>
      <div className={styles.marker} id="the-day"/>
      <div className={styles.page}>
        <div className={styles.secondPage}>
          <div className={styles.secondPageLeftContainer}>
            <h1 className={styles.secondPageText1}>SHORELINE, WA</h1>
            <Countdown date="07/16/2022 4:00 PM" />
            <div className={styles.secondPageImageContainer1}>
              <Image src="/mid.jpg" width="100%" height="100%" layout="responsive" objectFit="contain"/>
            </div>
          </div>
          <div className={styles.secondPageRightContainer}>
            <div className={styles.secondPageImageContainer2}>
                <Image src="/bottom.jpg" width="100%" height="100%" layout="responsive" objectFit="contain"/>
            </div>
            <h1 className={styles.secondPageText2}>THE DAY</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout;
