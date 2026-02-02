import { Routes, Route } from 'react-router'
import { AuthLayout } from '../components/AuthLayout'
import { Login } from '../components/Login'
import { SignUp } from '../components/SignUp'
import { ForgotPassword } from '../components/ForgotPassword'

export function AuthRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout/>} >
        <Route index path='login' element={<Login/>}></Route>
        <Route path='signup' element={<SignUp/>}></Route>
        <Route path='forgot-password' element={<ForgotPassword/>}></Route>
      </ Route>
    </Routes>
  )
}