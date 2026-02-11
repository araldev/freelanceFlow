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
    <aside className={`fixed bottom-0 left-0 w-full bg-background backdrop-blur-md border-t border-foreground ${className}`} {...props}>
      <nav>
        <ul className="flex items-center w-full h-20 justify-around">
          <li className="w-10 h-10"><NavLinkCustom to={PathnameApp.Dashboard}><DashboardIcon className='text-foreground w-full h-full'/></NavLinkCustom></li>
          <li className="w-10 h-10"><NavLinkCustom to={PathnameApp.Projects}><ProjectsIcon className='text-foreground w-full h-full'/></NavLinkCustom></li>
          <li className="w-10 h-10"><NavLinkCustom to={PathnameApp.Invoices}><InvoicesIcon className='text-foreground w-full h-full'/></NavLinkCustom></li>
          <li className="w-10 h-10"><NavLinkCustom to={PathnameApp.Clients}><ClientIcon className='text-foreground w-full h-full'/></NavLinkCustom></li>
          <li className="w-10 h-10"><NavLinkCustom to={PathnameApp.Profile}><ProfileIcon className='text-foreground w-full h-full'/></NavLinkCustom></li>
        </ul>
      </nav>
    </aside>
  )
}