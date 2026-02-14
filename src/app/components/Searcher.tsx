import { useId, type ComponentPropsWithoutRef } from 'react'
import { SearchIcon } from '../../assets/SearchIcon'

interface SearcherProps extends ComponentPropsWithoutRef<'label'> {
  placeholder?: string
}

export function Searcher({ className, placeholder, ...props }: SearcherProps) {
  const inputId = useId()

  return (
    <label className={`relative w-full h-10 ${className}`} htmlFor={inputId} {...props}>
      <SearchIcon className="cursor-pointer hover:bg-muted transition-colors active:scale-95 rounded-full p-1 w-fit h-full absolute top-0 right-2"/>
      <input id={inputId} placeholder={placeholder} className="w-full h-10 bg-background rounded-2xl pr-15 px-3 py-1.5 focus:ring-2 focus:ring-primary outline-none" type="text" />
    </label>
  )
}