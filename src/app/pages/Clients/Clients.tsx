import type { HTMLAttributes } from 'react'

export function Clients ({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <section className={`${className}`} {...props}>
    </section>
  )
}