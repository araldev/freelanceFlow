import { Routes, Route } from 'react-router'
import { AuthLayout } from './auth/components/AuthLayout'
import { NotFound404 } from './pages/NotFound404.tsx'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthLayout/>} />
        <Route path="*" element={<NotFound404/>} />
      </Routes>
    </>
  )
}