import Image from 'next/image';
import React from 'react';
import Base from '../components/base';

interface GiftsProps {}

const Gifts = ({ }: GiftsProps) => {
  
  return (
    <Base>
      <div className="paragraph-container">
        <h2>Gifts</h2>
        <p>We are extremely lucky to have love, laughter, and a house full of furniture. ​​Celebrating with you at our wedding is our greatest wish, but if you’d like to give a gift as well, a cash gift to put towards our honeymoon would be greatly appreciated.</p>
        <div className="payment-container">
          <div className="flex-container">
            <div className="payment-image-container">
              <Image priority={true} src="/giftmethods.png" className="payment-image" width="100%" height="10 %" layout="responsive" objectFit="contain" />
            </div>
          </div>
          <ul>
            <li>
              <span>To send through PayPal, click this link: </span>
              <a href="http://paypal.me/ellenandbrandon">http://paypal.me/ellenandbrandon</a>
              <span>.</span>
            </li>
            <li>To send through Zelle, use phone number 425-802-4102 or email address ellenburd@live.com.</li>
            <li>To send through Venmo, scan the QR code or search by username @EllenBurd.</li>
          </ul>
          <div className="flex-container">
            <div className="venmo-image-container">
              <Image priority={true} src="/venmo-wedding.png" className="venmo-image" width="100%" height="100%" layout="responsive" objectFit="contain" />
            </div>
          </div>
        </div>
      </div> 
    </Base>
  )
}

export default Gifts;
