import moment from "moment";
import React, { useEffect, useState } from "react";

const Countdown = ({ time }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const initializeCountdown = () => {
    return moment().add(time, "days");
  };

  useEffect(() => {
    let targetDate = initializeCountdown();
    const updateTimer = () => {
      const now = moment();
      const duration = moment.duration(targetDate.diff(now));
      if (duration.asSeconds() <= 0) {
        targetDate = initializeCountdown();
      }
      setTimeLeft({
        days: Math.floor(duration.asDays()),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds(),
      });
    };
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="d-flex align-items-center gap-3">
      {/* Day */}
      <div className="d-flex flex-column">
        <small>Days</small>
        <h2 className="mb-0">
          {timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}
        </h2>
      </div>
      <span className="red fs-2 mt-3">:</span>
      {/* Hours */}
      <div className="d-flex flex-column">
        <small>Hours</small>
        <h2 className="mb-0">
          {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
        </h2>
      </div>
      <span className="red fs-2 mt-3">:</span>
      {/* Minutes */}
      <div className="d-flex flex-column">
        <small>Minutes</small>
        <h2 className="mb-0">
          {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}
        </h2>
      </div>
      <span className="red fs-2 mt-3">:</span>
      {/* Seconds */}
      <div className="d-flex flex-column">
        <small>Seconds</small>
        <h2 className="mb-0">
          {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
        </h2>
      </div>
    </section>
  );
};

export default Countdown;
