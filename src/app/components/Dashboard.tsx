import type { HTMLAttributes } from 'react'
import { StateCard } from './StateCard'
import { TypeStateCard } from '../schemes/TypeStateCard'

export function Dashboard ({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <section className={`${className}`} {...props}>
      <StateCard type={TypeStateCard.Revenue}/>
    </section>
  )
}