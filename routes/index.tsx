import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Melon</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400&display=swap" />
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <main className="p-4 w-screen h-screen flex justify-center items-center dark:(bg-gray-900 text-white)">
        <div>
          <div className="flex items-center">
            <img src="/watermelon.png" alt="An oversimplified watermelon" className="w-12 h-12" />
            <h1 className="text-4xl ml-8">Melon</h1>
          </div>
          <hr className="my-2 w-2/4 border-none" />
          <div className="mx-auto flex items-center cursor-pointer select-none group" id="underline">
            <span className="text-3xl font-light">A <span className="text-red-400">sweet</span> link shortener.</span>
            <button className="transition-colors ml-4 duration-300 ease-[cubic-bezier(0.55,0,1,0.45)] text-gray-700 group-hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
