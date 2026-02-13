import { Outlet } from 'react-router'
import { NavBar } from '../components/NavBar'
import type { ComponentPropsWithRef, ElementType } from 'react'

export function AppLayout({ className, ref, ...props }: ComponentPropsWithRef<ElementType>) {
  return (
    <div className='container-area'>
      <main className={`main-area bg-muted w-full flex flex-col gap-4 p-6 ${className}`} {...props}>
        <Outlet/>
      </ main>

      <NavBar className="nav-area"/>
    </div>

  )
}