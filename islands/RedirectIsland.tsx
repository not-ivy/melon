import { useEffect, useState } from "preact/hooks";

export default function RedirectIsland({ target }: { target: string }) {
  const [countdown, setCountdown] = useState(3);
  const [url, setUrl] = useState("");

  useEffect(() => {
    fetch(`/api/redirect/${target}`)
      .then((res) => { if (res.status === 404) { window.location.assign('/404'); return; } return res.text(); })
      .then((data) => setUrl(data!))
      .catch(() => window.location.assign('/500'))
  }, [])

  useEffect(() => {
    if (!url) return;
    setCountdown((prev) => prev - 1);
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [url]);

  useEffect(() => {
    if (countdown) return;
    window.location.assign(url);
  }, [countdown]);

  if (!url) return (
    <div className="flex items-center fadeIn">
      <img src="/watermelon.webp" alt="An oversimplified watermelon" className="w-12 h-12" />
      <h1 className="text-4xl ml-6 pl-6 border-l-2 dark:border-white font-light">Working...</h1>
    </div>
  )

  return (
    <div className="flex items-center fadeIn">
      <img src="/watermelon.webp" alt="An oversimplified watermelon" className="w-12 h-12" />
      <h1 className="text-4xl ml-6 pl-6 border-l-2 dark:border-white font-light">Redirecting in <span className="font-medium">{countdown}</span> seconds...</h1>
    </div>
  )
}