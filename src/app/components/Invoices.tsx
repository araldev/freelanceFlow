import type { HTMLAttributes } from 'react'

export function Invoices({ className ,...props }: HTMLAttributes<HTMLElement>) {
  return (
    <section className={`${className}`} {...props}>

    </section>
  )
}