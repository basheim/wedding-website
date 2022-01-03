import Image from 'next/image';
import Countdown from './countdown';

export interface LayoutProps {}

const Layout = ({}: LayoutProps) => {
  return (
    <div className="layout">
      <div className="marker" id="home"/>
      <div className="page">
        <div className="first-page-top">
          <div className="first-page-image-container">
            <Image src="/top.jpg" width="100%" height="100%" layout="responsive" objectFit="contain"/>
          </div>
          <div className="first-page-text-container">
            <h1 className="first-page-text">07</h1>
            <h1 className="first-page-text">16</h1>
            <h1 className="first-page-text">22</h1>
          </div>
        </div>
        <div className="first-page-bottom">
          <div className="first-page-title-container">
            <h1 className="first-page-title">{"THE WEDDING OF BRANDON & ELLEN"}</h1>
          </div>
        </div>
      </div>
      <div className="margin-page"/>
      <div className="marker" id="the-day"/>
      <div className="page">
        <div className="second-page">
          <div className="second-page-left-container">
            <h1 className="second-page-text1">SHORELINE, WA</h1>
            <Countdown date="07/16/2022 4:00 PM" />
            <div className="second-page-image-container1">
              <Image src="/mid.jpg" width="100%" height="100%" layout="responsive" objectFit="contain"/>
            </div>
          </div>
          <div className="second-page-right-container">
            <div className="second-page-image-container2">
                <Image src="/bottom.jpg" width="100%" height="100%" layout="responsive" objectFit="contain"/>
            </div>
            <h1 className="second-page-text2">THE DAY</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout;
