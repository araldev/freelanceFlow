import background from '../../../assets/fondo_home.png'
import { Logo } from '../../shared/components/Logo.tsx'
import { NavLinkCustom } from '../../shared/components/NavLinkCustom.tsx'
import { CommentCard } from '../../shared/components/CommentCard.tsx'
import { useId } from 'react'

export function AuthLayout() {
  const idEmail = useId()
  const idPassword = useId()

  return (
    <section className='flex justify-center items-center min-h-dvh'>
      <aside className='relative z-0 flex flex-col  justify-center items-center w-1/2 h-dvh gap-10 object-cover p-14'>
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

      <aside className="flex flex-col justify-center items-center w-1/2">
        <form className="flex flex-col justify-center items-center" action="">
          <label htmlFor={idEmail}></label>
          <input id={idEmail} name="email" placeholder='email' type="text" />

          <label htmlFor={idPassword}></label>
          <input placeholder={idPassword} name="password" type="password" />
        </form>
      </aside>
    </section>
  )
}