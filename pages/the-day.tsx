import React from 'react';
import Base from '../components/base';

interface TheDayProps {}

const TheDay = ({ }: TheDayProps) => {
  
  return (
    <Base>
      <div className="paragraph-container">
        <h2>The Day</h2>
        <div className="timeline-container">
          <p className="timeline-text">4:00 pm the I do’s</p>
          <div className="timeline-div"></div>
          <p className="timeline-text">4:30 pm cocktail hour</p>
          <div className="timeline-div"></div>
          <p className="timeline-text bottom-text">5:30 pm dinner,</p>
          <p className="timeline-text continued-text">with dancing to follow</p>
        </div>
        <h4>{"Ceremony & Reception:"}</h4>
        <ul>
          <li>Dunn Gardens, 13533 Northshire Rd NW, Seattle, WA 98177.</li>
        </ul>
        <h4>Dress Code:</h4>
        <ul>
          <li>Formal attire (black tie optional).</li>
          <li>Ceremony and reception are on grass, please plan shoes accordingly.</li>
        </ul>
      </div> 
    </Base>
  )
}

export default TheDay;
