import React from 'react';
import { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const target = new Date(targetDate);
      const diff = target - now;

      if (diff < 0) return clearInterval(timer);

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="text-3xl font-mono space-x-4 mt-4">
      <span>{timeLeft.days || '0'}d</span>
      <span>{timeLeft.hours || '0'}h</span>
      <span>{timeLeft.minutes || '0'}m</span>
      <span>{timeLeft.seconds || '0'}s</span>
    </div>
  );
};

export default Countdown;
