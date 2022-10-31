export default function Input({ label, name, required, placeholder }: { label: string, name: string, required?: boolean, placeholder?: string }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="font-light text-2xl">{label}<sup className={`${required ? 'inline-block' : 'hidden'} text-red-500`}>*</sup></label>
      <input name={name} id={name} className="rounded-sm transition-colors outline-none dark:(bg-gray-800 text-white) p-3 mt-2 hover:(dark:bg-gray-700 bg-gray-300) inputUnderline" placeholder={placeholder} />
    </div>
  )
}