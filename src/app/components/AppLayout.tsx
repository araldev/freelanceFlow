import { NavLink } from 'react-router'
import { ClientIcon } from '../../assets/ClientIcon.tsx'
import { DashboardIcon } from '../../assets/DashboardIcon.tsx'
import { InvoicesIcon } from '../../assets/InvoicesIcon.tsx'
import { ProfileIcon } from '../../assets/ProfileIcon.tsx'
import { ProjectsIcon } from '../../assets/ProjectsIcon.tsx'

export function AppLayout() {
  return (
    <>
      <aside className="fixed bottom-0 left-0 w-full bg-background backdrop-blur-md border-t border-foreground">
        <nav>
          <ul className="flex items-center w-full h-20 justify-around">
            <li className="w-10 h-10"><NavLink to={'/app/dashboard'}><DashboardIcon className='text-foreground w-full h-full'/></NavLink></li>
            <li className="w-10 h-10"><NavLink to={'/app/projects'}><ProjectsIcon className='text-foreground w-full h-full'/></NavLink></li>
            <li className="w-10 h-10"><NavLink to={'/app/invoices'}><InvoicesIcon className='text-foreground w-full h-full'/></NavLink></li>
            <li className="w-10 h-10"><NavLink to={'/app/clients'}><ClientIcon className='text-foreground w-full h-full'/></NavLink></li>
            <li className="w-10 h-10"><NavLink to={'/app/profile'}><ProfileIcon className='text-foreground w-full h-full'/></NavLink></li>
          </ul>
        </nav>
      </aside>

      <main>

      </main>
    </>

  )
}