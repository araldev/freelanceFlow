import type { ComponentPropsWithRef, ElementType } from 'react'
import { ClientIcon } from '../../assets/ClientIcon'

export function ActivityBadge({ className, ref, ...props }: ComponentPropsWithRef<ElementType>) {
  const lastSeen = new Date()

  return (
    <article ref={ref} className={`shadow-md w-full flex justify-left items-center gap-4 rounded-4xl bg-background p-4 ${className}`} {...props}>
      
      <div className="w-10 h-10 p-1 rounded-full flex justify-center items-center bg-foreground/40 backdrop-blur-3xl">
        <ClientIcon/>
      </div>

      <div className="leading-5">
        <p className='font-semibold text-foreground'>Logo Design finalized</p>
        <small className="text-muted-foreground font-light">Project: TechStart Brand</small>
      </div>

      <time 
        dateTime={lastSeen.toISOString()} 
        className="text-muted-foreground text-xs italic ml-auto"
      >
        {lastSeen.toLocaleTimeString()}
      </time>
    </article>
  )
}