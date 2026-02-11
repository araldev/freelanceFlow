import { useId } from 'react'
import { NavLinkCustom } from '../../shared/components/NavLinkCustom'
import { Logo } from '../../shared/components/Logo'
import { PathnameAuth } from '../schemes/pathname'

export function ForgotPassword() {
  const idEmail = useId()

  return (
    <article className='p-6 md:p-10 w-full h-full flex flex-col gap-8 md:gap-14 justify-center items-center'>

      <div className='flex flex-col items-center md:block'>
        <Logo className='w-40 mb-10 md:hidden' />
        <h2 className='font-bold text-black text-3xl md:text-4xl'>Forgot Password</h2>
        <span className='text-sm'>Enter your email to reset your password.</span>
      </div>

      <form className="w-full flex flex-col justify-center items-center gap-4 mt-8" action="">

        <div className='max-w-120 w-full flex flex-col justify-center items-left'>
          <label className='font-semibold flex justify-between items-center' htmlFor={idEmail}>Email</label>
          <input className='w-full border-2 border-muted text-muted-foreground p-2 rounded-2xl focus:outline-1 outline-primary' id={idEmail} name="email" placeholder='name@company.com' type="email" />
        </div>

        <button className="max-w-120 w-full hover:scale-105 active:scale-95 cursor-pointer transition-transform font-medium shadow-lg p-4 rounded-4xl bg-primary text-primary-foreground">Send Reset Link</button>
        <span className="self-center">Remember your password? <NavLinkCustom className="font-bold" to={PathnameAuth.Login}>Sign in</ NavLinkCustom> </span>
      </form>
    </article>
  )
}