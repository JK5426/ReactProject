import { useEffect, useState } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="date-time">
      {time.toLocaleDateString()} - {time.toLocaleTimeString()}
    </div>
  );
};

export default CurrentTime;
