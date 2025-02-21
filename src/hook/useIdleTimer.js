import { useEffect, useRef } from "react";

const useIdleTimer = (onIdle, timeout = 1800000) => { // 30 minutes default
  const timer = useRef(null);

  const startTimer = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(onIdle, timeout);
  };

  const stopTimer = () => {
    if (timer.current) clearTimeout(timer.current);
  };

  useEffect(() => {
    const handleActivity = () => startTimer();

    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keydown", handleActivity);
    window.addEventListener("click", handleActivity);
    window.addEventListener("scroll", handleActivity);

    return () => {
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keydown", handleActivity);
      window.removeEventListener("click", handleActivity);
      window.removeEventListener("scroll", handleActivity);
      stopTimer();
    };
  }, []);

  return { startTimer, stopTimer };
};

export default useIdleTimer;
