interface StatusProps {
  hidden: boolean;
  fail: boolean;
  message: string;
}

export default function Status({ hidden, fail, message }: StatusProps) {
  return (
    <div className={`${hidden ? 'hidden' : 'flex'} items-center mb-16 px-4 py-2 text-black rounded-sm gap-x-4 ${fail ? 'bg-red-300 border-red-500' : 'bg-green-300 border-green-500'}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 ${fail ? 'hidden' : 'block'}`}>
        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 ${!fail ? 'hidden' : 'block'}`}>
        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
      </svg>
      <span className="font-medium">{message}</span>
    </div>
  )
}