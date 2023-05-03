import { useEffect } from 'preact/hooks';
import Blankslate from '../components/Blankslate.tsx';

export default function RedirectIsland({ target }: { target?: string }) {
  useEffect(() => {
    return target ? window.location.assign(target) : window.location.assign('/404');
  }, []);

  // this is in case the user has JS disabled
  return target ? (
    <Blankslate>
      Redirecting you&nbsp;
      <a href={target} className="underline">
        here
      </a>
      ...
    </Blankslate>
  ) : (
    <Blankslate>
      404 <span className="font-light">Not Found</span>
    </Blankslate>
  );
}
