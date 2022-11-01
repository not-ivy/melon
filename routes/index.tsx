import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Melon</title>
        <meta content="Landing Page" property="og:title" />
        <link rel="stylesheet" href="/styles/index.css" />
      </Head>
      <main className="p-4 w-screen h-screen flex justify-center items-center dark:(bg-gray-900 text-white)">
        <div className="fadeIn">
          <div className="flex items-center">
            <img src="/watermelon.webp" alt="An oversimplified watermelon" className="w-12 h-12" />
            <h1 className="text-4xl ml-8">Melon</h1>
          </div>
          <hr className="my-2 w-2/4 border-none" />
          <a className="mx-auto cursor-pointer select-none group" id="underline" href="/shorten">
            <span className="text-3xl font-light">A <span className="text-red-400">sweet</span> link shortener.</span>
            <sup className="transition(colors transform) inline-block duration-300 text-gray-600 group-hover:(text-white translate-x-3) ml-1" aria-label="Shorten a link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-6">
                <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            </sup>
          </a>
        </div>
        <footer className="absolute bottom-0 pr-4 pb-4 w-full flex flex-row-reverse gap-x-8">
          <a className="cursor-pointer" href="https://github.com/not-ivy/melon" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z" clipRule="evenodd" />
            </svg>
          </a>
        </footer>
      </main>
    </>
  );
}
