import { Outlet } from 'react-router'
import { NavBar } from '../components/NavBar'
import type { ComponentPropsWithRef, ElementType } from 'react'
import { NotificationsIcon } from '../../assets/NotificationsIcon'

export function AppLayout({ className, ref, ...props }: ComponentPropsWithRef<ElementType>) {
  return (
    <div className='container-area'>
      <main className={`main-area bg-muted w-full flex flex-col gap-4 p-6 ${className}`} {...props}>
        <NotificationsIcon className="z-20 shrink-0 absolute top-6 right-10 shadow-md active:scale-95 hover:scale-105 hover:bg-primary transition-all cursor-pointer ml-auto w-10 h-10 bg-primary/20 text-primary-foreground p-2 rounded-full backdrop-blur-2xl"/>

        <Outlet/>
      </ main>

      <NavBar className="nav-area"/>
    </div>

  )
}