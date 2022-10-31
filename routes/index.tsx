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
          <a className="mx-auto flex items-center cursor-pointer select-none group" id="underline" href="/shorten">
            <span className="text-3xl font-light">A <span className="text-red-400">sweet</span> link shortener.</span>
            <button className="transition(colors transform) ml-4 duration-300 text-gray-700 group-hover:(text-white translate-x-3)" aria-label="Shorten a link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </button>
          </a>
        </div>
        <footer className="absolute bottom-0 pr-4 pb-4 w-full flex flex-row-reverse gap-x-8">
          <a className="cursor-pointer" href="https://github.com/not-ivy/melon" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path fill-rule="evenodd" d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" clip-rule="evenodd" />
            </svg>
          </a>
        </footer>
      </main>
    </>
  );
}
