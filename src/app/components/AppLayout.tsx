import { Outlet } from 'react-router'
import { NavBar } from './NavBar'
import type { HTMLAttributes } from 'react'

export function AppLayout({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <>      
      <NavBar/>

      <main className={`${className}`} {...props}>
        <Outlet/>
      </main>
    </>

  )
}