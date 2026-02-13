import { Routes, Route, Navigate } from 'react-router'
import { AuthLayout } from '../auth/components/AuthLayout'
import { Login } from '../auth/components/Login'
import { SignUp } from '../auth/components/SignUp'
import { ForgotPassword } from '../auth/components/ForgotPassword'
import { PathnameAuth } from '../auth/schemes/pathname'

export function AuthRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout/>} >
        <Route index path='login' element={<Login/>}></Route>
        <Route path='signup' element={<SignUp/>}></Route>
        <Route path='forgot-password' element={<ForgotPassword/>}></Route>

        <Route path="*" element={<Navigate to={PathnameAuth.Login} replace/>}></Route>
      </ Route>
    </Routes>
  )
}