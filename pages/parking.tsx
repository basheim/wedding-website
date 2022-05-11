import Image from 'next/image';
import React from 'react';
import Base from '../components/base';

interface ParkingProps {}

const Parking = ({ }: ParkingProps) => {
  
  return (
    <Base>
      <div className="paragraph-container">
        <h2>Getting There</h2>
        <h4>For those planning to park:</h4>
        <ul>
          <li>Please note there is no parking available at the venue. Dunn Gardens is located in a small residential neighborhood so we kindly ask that you do not park at the venue.</li>
          <li>We have prepared a parking area for guests, please park at Thompson High School located at 13052 Greenwood Ave N, Seattle, WA 98133.</li>
          <li>We recommend guests arrive to the parking area by 3:30 pm as Lyft rides can take up to 10 - 15 minutes for pick up.</li>
        </ul>
        <h4>For all guests:</h4>
        <ul>
          <li>We have prepared a Lyft code for all guests in advance. The Lyft code is: “EGGO2022”</li>
          <li>It will become active at 12:00 pm on July 16, 2022 and expire at 6:00 am on Sunday July 17, 2022.</li>
          <li>
            <span>To use the Lyft code, please follow these instructions on the </span>
            <a href="https://support.lyftbusiness.com/hc/en-us/articles/360015777114-Using-an-event-code-as-a-guest">Lyft website</a>
            <span>.</span>
          </li>
          <li>You will only need to enter the Lyft code once per account to take Lyft rides to Dunn Gardens and back to the parking area, your home or hotel.</li>
          <li>Please have your Lyft driver drop you off at the front entrance pictured below. The road is a one way so we ask that your Lyft not drive through the gates. It is a short walk to the left to enter the gardens.</li>
        </ul>
        <div className="paragraph-image-container">
          <Image priority={true} src="/gate.jpg" className="paragraph-image" width="100%" height="75%" layout="responsive" objectFit="contain" />
        </div>
      </div> 
    </Base>
  )
}

export default Parking;
