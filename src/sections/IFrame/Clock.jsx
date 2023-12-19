import { useState, useEffect } from "react";

function Clock() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup function to clear the interval
    return () => {
      clearInterval(timerID);
    };
  }, []); // Empty dependency array means this effect runs once on mount and then on unmount

  return (
    <div style={{ fontFamily: "monospace", fontSize: 22 }}>{currentTime}</div>
  );
}

export default Clock;
