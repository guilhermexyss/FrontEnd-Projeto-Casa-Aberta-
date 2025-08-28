import React, { useState, useEffect } from 'react';
import "./Timer.css";

export const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(120);

  useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div>
      <h1>Tempo restante: <br/> {timeLeft} segundos</h1>
    </div>
  );
};
