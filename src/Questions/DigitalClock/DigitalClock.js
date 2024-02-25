import React, { useEffect, useState } from "react";

// styles
import "./DigitalClock.css";

// helper
import { getDateAndTime } from "./helper";

function DigitalClock() {
  const { hours, minutes, seconds, todaysDate } = getDateAndTime();

  const [hrs, setHrs] = useState(hours);
  const [mins, setMins] = useState(minutes);
  const [secs, setSecs] = useState(seconds);
  const [date, setDate] = useState(todaysDate);

  const runClock = () => {
    setTimeout(() => {
      if (Number(hrs) === 24) {
        setHrs(0);
        setMins(0);
        setSecs(0);
        return;
      }
      if (Number(mins) === 59) {
        setHrs(Number(hrs) + 1);
        setMins(0);
        setSecs(0);
        return;
      }
      if (Number(secs) === 59) {
        setMins(Number(mins) + 1);
        setSecs(0);
        return;
      }
      setSecs(Number(secs) + 1);
    }, 1000);
  };

  useEffect(() => {
    runClock();
  });

  return (
    <div className="digital-clock-container">
      <div className="digital-clock">
        <p>{hrs}</p>
        <p className="digital-clock-colon">:</p>
        <p>{Number(mins) < 10 ? `0${mins}` : mins}</p>
        <p className="digital-clock-colon">:</p>
        <p>{Number(secs) < 10 ? `0${secs}` : secs}</p>
      </div>
    </div>
  );
}

export default DigitalClock;
