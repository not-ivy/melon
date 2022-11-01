import { useEffect, useState } from "preact/hooks";
import Blankslate from "../components/Blankslate.tsx";

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
    <Blankslate>
      <span className="animate-pulse">Working...</span>
    </Blankslate>
  )

  return (
    <Blankslate>
      Redirecting in <span className="font-medium">{countdown}</span> seconds...
    </Blankslate>
  )
}