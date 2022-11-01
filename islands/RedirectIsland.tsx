import { useEffect, useState } from "preact/hooks";

export default function RedirectIsland({ target }: { target: string }) {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    setCountdown((prev) => prev - 1);
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (countdown) return;
    window.location.assign(target);
  }, [countdown]);

  return (
    <div className="flex items-center fadeIn">
      <img src="/watermelon.webp" alt="An oversimplified watermelon" className="w-12 h-12" />
      <h1 className="text-4xl ml-6 pl-6 border-l-2 dark:border-white font-light">Redirecting in <span className="font-medium">{countdown}</span> seconds...</h1>
    </div>
  )
}