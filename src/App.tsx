import { Routes, Route } from 'react-router'
import { AuthLayout } from './auth/components/AuthLayout.tsx'
import { Login } from './auth/components/Login.tsx'
import { SignUp } from './auth/components/SignUp.tsx'
import { ForgotPassword } from './auth/components/ForgotPassword.tsx'
import { NotFound404 } from './pages/NotFound404.tsx'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthLayout/>} >
          <Route index element={<Login/>}></Route>
          <Route path='signup' element={<SignUp/>}></Route>
          <Route path='forgot-password' element={<ForgotPassword/>}></Route>
        </ Route>
        <Route path="*" element={<NotFound404/>} />
      </Routes>
    </>
  )
}