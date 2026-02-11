import { Routes, Route, Navigate } from 'react-router'
import { NotFound404 } from './pages/NotFound404.tsx'
import { ProtectedRoute } from './shared/components/ProtectedRoute.tsx'
import { AuthRoutes } from './routes/AuthRoutes.tsx'
import { LoggedRoutes } from './routes/LoggedRoutes.tsx'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={'/auth/login'} />}></Route>
        <Route path="/auth/*" element={<AuthRoutes/>}></Route>

        <Route element={<ProtectedRoute/>}>
          <Route path='/app/*' element={<LoggedRoutes/>}></Route>
        </Route>

        <Route path="*" element={<NotFound404/>} />
      </Routes>
    </>
  )
}