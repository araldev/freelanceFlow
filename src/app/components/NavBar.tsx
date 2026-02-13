import type { HTMLAttributes } from 'react'
import { NavLinkCustom } from '../../shared/components/NavLinkCustom'
import { PathnameApp } from '../schemes/pathname'
import { DashboardIcon } from '../../assets/DashboardIcon'
import { ProjectsIcon } from '../../assets/ProjectsIcon'
import { InvoicesIcon } from '../../assets/InvoicesIcon'
import { ClientIcon } from '../../assets/ClientIcon'
import { ProfileIcon } from '../../assets/ProfileIcon'

export function NavBar ({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <aside className={`z-10 fixed bottom-0 left-0 w-full bg-background backdrop-blur-md border-t border-foreground ${className}`} {...props}>
      <nav>
        <ul className="flex items-center w-full h-fit justify-around p-6">

          <li className="flex flex-col justify-center items-center active:scale-95 hover:scale-105 transition-transform cursor-pointer w-fit h-fit"><NavLinkCustom to={PathnameApp.Dashboard} className="flex flex-col items-center">
            <DashboardIcon className='text-foreground w-8 h-8'/>
            <span>Home</span>
          </NavLinkCustom></li>

          <li className="flex flex-col justify-center items-center active:scale-95 hover:scale-105 transition-transform cursor-pointer w-fit h-fit"><NavLinkCustom to={PathnameApp.Projects} className="flex flex-col items-center">
            <ProjectsIcon className='text-foreground w-8 h-8'/>
            <span>Projects</span>
          </NavLinkCustom></li>

          <li className="flex flex-col justify-center items-center active:scale-95 hover:scale-105 transition-transform cursor-pointer w-fit h-fit"><NavLinkCustom to={PathnameApp.Invoices} className="flex flex-col items-center">
            <InvoicesIcon className='text-foreground w-8 h-8'/>
            <span>Invoices</span>
          </NavLinkCustom></li>

          <li className="flex flex-col justify-center items-center active:scale-95 hover:scale-105 transition-transform cursor-pointer w-fit h-fit"><NavLinkCustom to={PathnameApp.Clients} className="flex flex-col items-center">
            <ClientIcon className='text-foreground w-8 h-8'/>
            <span>Clients</span>
          </NavLinkCustom></li>

          <li className="flex flex-col justify-center items-center active:scale-95 hover:scale-105 transition-transform cursor-pointer w-fit h-fit"><NavLinkCustom to={PathnameApp.Profile} className="flex flex-col items-center">
            <ProfileIcon className='text-foreground w-8 h-8'/>
            <span>Profile</span>
          </NavLinkCustom></li>

        </ul>
      </nav>
    </aside>
  )
}