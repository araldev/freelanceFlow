import type { HTMLAttributes } from 'react'
import { SearchIcon } from '../../../assets/SearchIcon'

export function Projects({ className ,...props }: HTMLAttributes<HTMLElement>) {
  return (
    <main className={`bg-muted min-h-dvh flex flex-col gap-4 p-6 ${className}`} {...props}>

      <section className={`${className}`} {...props}>
        <fieldset className="flex w-full h-fit justify-left gap-4 items-center flex-wrap">
          <legend className="font-bold text-2xl mb-4">My Projects</legend>

          <label className="relative w-full h-10" htmlFor="">
            <SearchIcon className="h-full absolute top-0 right-2"/>
            <input placeholder='Search projects...' className="w-full h-10 bg-background rounded-2xl px-3 py-1.5 focus:ring-2 focus:ring-primary outline-none" type="text" />
          </label>

          <label className="shadow-md relative min-w-fit z-0 p-2 w-20 text-center bg-background text-foreground rounded-4xl has-checked:bg-primary has-checked:text-primary-foreground has-focus-visible:ring-2 has-focus-visible:ring-offset-2 has-focus-visible:ring-primary" htmlFor="">All
            <input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer " value="all" type="checkbox" />
          </label>

          <label className="shadow-md relative min-w-fit z-0 p-2 w-20 text-center bg-background text-foreground rounded-4xl has-checked:bg-primary has-checked:text-primary-foreground has-focus-visible:ring-2 has-focus-visible:ring-offset-2 has-focus-visible:ring-primary" htmlFor="">In Progress
            <input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer " value="progress" type="checkbox" />
          </label>

          <label className="shadow-md relative min-w-fit z-0 p-2 w-20 text-center bg-background text-foreground rounded-4xl has-checked:bg-primary has-checked:text-primary-foreground has-focus-visible:ring-2 has-focus-visible:ring-offset-2 has-focus-visible:ring-primary" htmlFor="">Completed
            <input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer " value="completed" type="checkbox" />
          </label>

          <label className="shadow-md relative min-w-fit z-0 p-2 w-20 text-center bg-background text-foreground rounded-4xl has-checked:bg-primary has-checked:text-primary-foreground has-focus-visible:ring-2 has-focus-visible:ring-offset-2 has-focus-visible:ring-primary" htmlFor="">Pending
            <input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer " value="pending" type="checkbox" />
          </label>

        </fieldset>
      </section>

      <section className="flex flex-col justify-start items-center gap-6 w-full min-h-dvh p-4 rounded-2xl bg-background text-foreground">
        
      </section>

    </main>
  )
}