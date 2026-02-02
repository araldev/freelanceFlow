import { useId } from 'react'
import { UserSvg } from '../../shared/components/UserSvg'
import { NavLinkCustom } from '../../shared/components/NavLinkCustom'
import { Logo } from '../../shared/components/Logo'

export function Login () {
  const idEmail = useId()
  const idPassword = useId()

  return (
    <article className='p-6 md:p-10 w-full h-full flex flex-col gap-8 md:gap-14 justify-center items-center'>

      <div className='flex flex-col items-center md:block'>
        <Logo className='w-40 mb-10 md:hidden'/>
        <h2 className='font-bold text-black text-3xl md:text-4xl'>Welcome back</h2>
        <span className='text-sm'>Please enter your details to sign in.</span>
      </div>

      <button className="max-w-120 hover:scale-105 active:scale-95 cursor-pointer transition-transform w-full md:w-4/5 flex gap-4 justify-center items-center border p-4 font-semibold rounded-3xl"><UserSvg className="stroke-2"/> Sign in with Google</button>
      
      <div className='text-muted-foreground p-4 flex justify-around items-center w-full'><hr className='w-full'/> <span className='text-sm w-full text-center'>OR SIGN UP WITH EMAIL</span> <hr className='w-full'/></div>

      <form className="w-full flex flex-col justify-center items-center gap-4" action="">

        <div className='max-w-120 w-full flex flex-col justify-center items-left'>
          <label className='font-semibold flex justify-between items-center' htmlFor={idEmail}>Email</label>
          <input className='w-full border-2 border-muted text-muted-foreground p-2 rounded-2xl focus:outline-1 outline-primary' id={idEmail} name="email" placeholder='name@company.com' type="email" />
        </div>

        <div className='max-w-120 w-full flex flex-col justify-center items-left'>
          <label className='font-semibold flex justify-between items-center' htmlFor={idPassword}>Password <NavLinkCustom to={'/auth/forgot-password'} className='text-sm'>Forgot password?</NavLinkCustom></label>
          
          <input className='w-full border-2 border-muted text-muted-foreground p-2 rounded-2xl focus:outline-1 outline-primary' id={idPassword} placeholder='*******' name="password" type="password" />
        </div>

        <button className="max-w-120 w-full hover:scale-105 active:scale-95 cursor-pointer transition-transform font-medium shadow-lg p-4 rounded-4xl bg-primary text-primary-foreground">Sign in</button>
        <span className="self-center">Don`t have an account? <NavLinkCustom className="font-bold" to={'/auth/signup'}>Sign up for free </ NavLinkCustom> </span>
      </form>
    </article>
  )
}