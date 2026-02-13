import background from '../../assets/fondo_home.png'
import { Logo } from '../../assets/Logo.tsx'
import { NavLinkCustom } from '../../shared/components/NavLinkCustom.tsx'
import { CommentCard } from '../../shared/components/CommentCard.tsx'
import { Outlet } from 'react-router'



export function AuthLayout() {
  return (
    <main className='flex justify-center items-center min-h-dvh'>
      <aside className='hidden md:flex relative z-0 flex-col justify-center items-center w-1/2 h-dvh gap-10 object-cover p-14'>
        <img className="absolute top-0 left-0 -z-50 w-full h-full" src={background} alt="imagen fondo decorativa" />
        
        <Logo fill="white" className='w-40 absolute top-8 left-16'/>

        <CommentCard className="mt-auto"/>

        <footer className="text-muted mt-auto w-full flex justify-between items-center flex-wrap">
          <span>&copy; FreelanceFlow Inc.</span>

          <nav className="w-fit flex justify-center items-center gap-4">
            <NavLinkCustom to="/privacy">Privacy</NavLinkCustom>
            <NavLinkCustom to="/terms">Terms</NavLinkCustom>
          </nav>
        </footer>
      </aside>



      <aside className="flex flex-col justify-center items-center w-full md:w-1/2">
        <Outlet/>
      </aside>
    </main>
  )
}