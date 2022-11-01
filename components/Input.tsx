export default function Input({ label, name, required, placeholder, type }: { label: string, name: string, required?: boolean, placeholder?: string, type?: string }) {
  return (
    <div className="flex flex-col transition-shadow hover:shadow-lg focus-within:shadow-lg">
      <label htmlFor={name} className="font-light text-2xl">{label}<sup className={`${required ? 'inline-block' : 'hidden'} text-red-500 ml-0.5`}>*</sup></label>
      <input required={required} name={name} id={name} type={type ?? 'text'} className="rounded-sm transition-colors outline-none dark:(bg-gray-800 text-white) p-3 mt-2 hover:(dark:bg-gray-700 bg-gray-200 shadow-inner) hover:shadow-inner focus:(shadow-inner dark:bg-gray-700 bg-gray-200) inputUnderline border-2 border-gray-600" placeholder={placeholder} />
    </div>
  )
}