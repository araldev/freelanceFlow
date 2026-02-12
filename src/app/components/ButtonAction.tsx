import type {  ComponentPropsWithRef, ElementType, ReactElement, ReactNode } from 'react'
import React from 'react'

type AllowedTags = ('button' | 'a') & keyof React.JSX.IntrinsicElements

type PolimorphicProps< T extends AllowedTags = 'button' > = {
  as?: T
  className?: string
  children: ReactNode
} & ComponentPropsWithRef<T>

export function ButtonAction<T extends AllowedTags = 'button'>({ as, children, className, ref, ...props }: PolimorphicProps<T>): ReactElement {
  const Component = (as || 'button') as ElementType
  
  return (
    <Component ref={ref} className={`shadow-md active:scale-95 hover:scale-105 transition-transform cursor-pointer text-md font-semibold bg-primary text-primary-foreground p-4 rounded-4xl min-w-fit w-40 ${className}`} {...props}>
      {children}
    </Component>
  )
}