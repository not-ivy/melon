import { ComponentChildren } from "preact";

export default function Blankslate({ children }: { children: ComponentChildren }) {
  return (
    <div className="flex items-center" id="fadeIn">
      <img src="/watermelon.webp" alt="An oversimplified watermelon" className="w-12 h-12" />
      <h1 className="text-4xl ml-6 pl-6 border-l-2 dark:border-white">{children}</h1>
    </div>
  )
}