import { useEffect, useState } from 'react';

export interface CountdownProps {
  date: string;
}

const Countdown = ({date}: CountdownProps) => {

  const [timeString, setTimeString] = useState("");
  const end = new Date(date);
  const _second = 1000;
  const _minute = _second * 60;
  const _hour = _minute * 60;
  const _day = _hour * 24;
  
  useEffect(() => {
    countDownTimer();
  }, []);

  const countDownTimer = () => {
    function showRemaining() {
        const now = new Date();
        const distance = end.getTime() - now.getTime();

        const days = Math.floor(distance / _day);
        const hours = Math.floor((distance % _day) / _hour);
        const minutes = Math.floor((distance % _hour) / _minute);
        const seconds = Math.floor((distance % _minute) / _second);

        const string = `${days} DAYS ${hours} HOURS ${minutes} MINUTES ${seconds} SECONDS`;

        setTimeString(string);
    }
    setInterval(showRemaining, 1000);
  };

  return (
    <div className="countdown-container">
        <h1 className="countdown-text">{timeString}</h1>
    </div>
  )
}

export default Countdown;
