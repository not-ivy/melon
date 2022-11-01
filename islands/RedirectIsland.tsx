import { useEffect, useState } from "preact/hooks";
import Blankslate from "../components/Blankslate.tsx";

export default function RedirectIsland({ target }: { target: string }) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    
    fetch('/api/lengthen', { method: 'POST', body: target })
      .then((res) => {
        if (res.status !== 200) { window.location.assign(`/${res.status}`); return; }
        console.log(res.status);
        return res.text();
      })
      .then((data) => {
        console.log(data);
        setUrl(data as string);
      })
      .catch(() => window.location.assign('/500'))
  }, [target, window.location]);

  useEffect(() => {
    if (!url) return;
    window.location.assign(url);
  }, [url]);

  if (!url) return (
    <Blankslate>
      <span className="animate-pulse">Working...</span>
    </Blankslate>
  )

  return (
    <Blankslate>
      Redirecting...
    </Blankslate>
  )
}