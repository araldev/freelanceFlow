import type { ComponentPropsWithRef, ElementType } from 'react'
import { NavLinkCustom } from '../../shared/components/NavLinkCustom'
import { PathnameApp } from '../schemes/pathname'
import { DashboardIcon } from '../../assets/DashboardIcon'
import { ProjectsIcon } from '../../assets/ProjectsIcon'
import { InvoicesIcon } from '../../assets/InvoicesIcon'
import { ClientIcon } from '../../assets/ClientIcon'
import { ProfileIcon } from '../../assets/ProfileIcon'

export function NavBar ({ className, ref, ...props }: ComponentPropsWithRef<ElementType>) {
  return (
    <aside ref={ref} className={`z-20 shadow-top w-full h-fit bg-background backdrop-blur-md border-t border-foreground lg:w-fit lg:h-full lg:border-t-0 lg:border-r ${className}`} {...props}>
      <nav>
        <ul className="flex items-center w-full h-fit justify-around p-6 lg:flex-col lg:justify-start lg:items-start lg:gap-4 lg:p-8 lg:h-full">

          <li className="flex flex-col justify-center items-center active:scale-95 hover:scale-105 transition-transform cursor-pointer w-fit h-fit lg:w-full"><NavLinkCustom to={PathnameApp.Dashboard} className="flex flex-col items-center lg:flex-row lg:gap-3 lg:w-full lg:px-4 lg:py-3 lg:rounded-xl hover:lg:bg-muted">
            <DashboardIcon className='text-foreground w-8 h-8'/>
            <span>Home</span>
          </NavLinkCustom></li>

          <li className="flex flex-col justify-center items-center active:scale-95 hover:scale-105 transition-transform cursor-pointer w-fit h-fit lg:w-full"><NavLinkCustom to={PathnameApp.Projects} className="flex flex-col items-center lg:flex-row lg:gap-3 lg:w-full lg:px-4 lg:py-3 lg:rounded-xl hover:lg:bg-muted">
            <ProjectsIcon className='text-foreground w-8 h-8'/>
            <span>Projects</span>
          </NavLinkCustom></li>

          <li className="flex flex-col justify-center items-center active:scale-95 hover:scale-105 transition-transform cursor-pointer w-fit h-fit lg:w-full"><NavLinkCustom to={PathnameApp.Invoices} className="flex flex-col items-center lg:flex-row lg:gap-3 lg:w-full lg:px-4 lg:py-3 lg:rounded-xl hover:lg:bg-muted">
            <InvoicesIcon className='text-foreground w-8 h-8'/>
            <span>Invoices</span>
          </NavLinkCustom></li>

          <li className="flex flex-col justify-center items-center active:scale-95 hover:scale-105 transition-transform cursor-pointer w-fit h-fit lg:w-full"><NavLinkCustom to={PathnameApp.Clients} className="flex flex-col items-center lg:flex-row lg:gap-3 lg:w-full lg:px-4 lg:py-3 lg:rounded-xl hover:lg:bg-muted">
            <ClientIcon className='text-foreground w-8 h-8'/>
            <span>Clients</span>
          </NavLinkCustom></li>

          <li className="flex flex-col justify-center items-center active:scale-95 hover:scale-105 transition-transform cursor-pointer w-fit h-fit lg:w-full"><NavLinkCustom to={PathnameApp.Profile} className="flex flex-col items-center lg:flex-row lg:gap-3 lg:w-full lg:px-4 lg:py-3 lg:rounded-xl hover:lg:bg-muted">
            <ProfileIcon className='text-foreground w-8 h-8'/>
            <span>Profile</span>
          </NavLinkCustom></li>

        </ul>
      </nav>
    </aside>
  )
}