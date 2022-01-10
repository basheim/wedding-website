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
            <Image priority={true} src="/top.jpg" width="100%" height="100%" layout="responsive" objectFit="contain"/>
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
              <Image priority={true} src="/mid.jpg" width="100%" height="100%" layout="responsive" objectFit="contain"/>
            </div>
          </div>
          <div className="second-page-right-container">
            <div className="second-page-image-container2">
                <Image priority={true} src="/bottom.jpg" width="100%" height="100%" layout="responsive" objectFit="contain"/>
            </div>
            <h1 className="second-page-text2">THE DAY</h1>
          </div>
        </div>
      </div>
      <div className="marker" id="love-story"/>
      <div className="page">
        <div className="third-page">
        <h1 className="third-page-title">{"LOVE STORY"}</h1>
        <p>When Brandon chose to live in McMahon Hall at the University of Washington in 2012 he had no idea he would meet the love of his life. Brandon’s randomly assigned clustermate, Kevin Miller, invited Ellen over to their cluster one day. Brandon caught a glimpse of Ellen as he walked by Kevin’s room and he knew he had to introduce himself. While she was studying with Kevin a few weeks later he jokingly told her not to date any of his clustermates, but by then Brandon and Ellen had already started dating, oops! </p>
        <p>Brandon and Ellen spent time eating at the McMahon dining hall before their disaster of a first “real” date. They got lost trying to find the restaurant they planned for since neither of them had smartphones and neither printed out the google maps directions. A few laughs and quick decisions later they both discovered a common love for sushi after deciding on a Japanese restaurant. It’s still one of their favorites to eat together to this day. That was the start to their 9 year partnership full of problem-solving and failed plans turned fond memories.</p>
        <p>Since graduating college, their shared love of traveling has led to countless adventures across the United States and countries like Taiwan, Spain and Morocco. In 2016 they spent over 2 weeks camping and hiking through Arizona and Utah ending the road trip with a total count of 25+ hours together in a car. In 2017 they enjoyed the best food and visited Ellen’s family in Taiwan ending the trip with a total count of 26+ hours spent together on planes. </p>
        <p>In March of 2020 Brandon proposed to Ellen at the University of Washington under the blooming cherry trees. Being able to enjoy each other’s company in cramped spaces came in handy for when they’d spend the next 2 years working from home together through the pandemic, engaged and waiting to celebrate with you!</p>
        <p> We’re so excited for you to join us in July 2022 for when we finally get to say “I do.” </p>
        <div className="third-page-images">
          <div className="row-container">
            <Image priority={true} src="/twelve2.jpg" className="row-image" width="100%" height="100%" layout="responsive" objectFit="contain"/>
            <div className="text-container">
              <span className="row-containerText">2012</span>
            </div>
          </div>
          <div className="row-container">
            <Image priority={true} src="/thirteen2.jpg" className="row-image" width="100%" height="100%" layout="responsive" objectFit="contain"/>
            <div className="text-container">
              <span className="row-containerText">2013</span>
            </div>
          </div>
          <div className="row-container">
            <Image priority={true} src="/fourteen2.jpg" className="row-image" width="100%" height="100%" layout="responsive" objectFit="contain"/>
            <div className="text-container">
              <span className="row-containerText">2014</span>
            </div>
          </div>
          <div className="row-container">
            <Image priority={true} src="/fifteen2.jpg" className="row-image" width="100%" height="100%" layout="responsive" objectFit="contain"/>
            <div className="text-container">
              <span className="row-containerText">2015</span>
            </div>
          </div>
          <div className="row-container">
            <Image priority={true} src="/sixteen2.jpg" className="row-image" width="100%" height="100%" layout="responsive" objectFit="contain"/>
            <div className="text-container">
              <span className="row-containerText">2016</span>
            </div>
          </div>
          <div className="row-container">
            <Image priority={true} src="/seventeen2.jpg" className="row-image" width="100%" height="100%" layout="responsive" objectFit="contain"/>
            <div className="text-container">
              <span className="row-containerText">2017</span>
            </div>
          </div>
          <div className="row-container">
            <Image priority={true} src="/eighteen2.jpg" className="row-image" width="100%" height="100%" layout="responsive" objectFit="contain"/>
            <div className="text-container">
              <span className="row-containerText">2018</span>
            </div>
          </div>
          <div className="row-container">
            <Image priority={true} src="/nineteen2.jpg" className="row-image" width="100%" height="100%" layout="responsive" objectFit="contain"/>
            <div className="text-container">
              <span className="row-containerText">2019</span>
            </div>
          </div>
          <div className="row-container">
            <Image priority={true} src="/twenty2.jpg" className="row-image" width="100%" height="100%" layout="responsive" objectFit="contain"/>
            <div className="text-container">
              <span className="row-containerText">2020</span>
            </div>
          </div>
        </div>  
        </div>
      </div>
    </div>
  )
}

export default Layout;
