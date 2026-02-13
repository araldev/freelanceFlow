import type { HTMLAttributes } from 'react'

export function Projects({ className ,...props }: HTMLAttributes<HTMLElement>) {
  return (
    <section className={`${className}`} {...props}>

    </section>
  )
}