import { Routes, Route, Navigate } from 'react-router'
import { NotFound404 } from './pages/NotFound404.tsx'
import { ProtectedRoute } from './shared/components/ProtectedRoute.tsx'
import { AuthRoutes } from './auth/routes/AuthRoutes.tsx'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes/>}></Route>

        <Route path="/app" element={<ProtectedRoute/>}>
          <Route path='dashboard' element={<NotFound404/>}></Route>
        </Route>

        <Route path="/" element={<Navigate to={'/auth/login'} />}></Route>

        <Route path="*" element={<NotFound404/>} />
      </Routes>
    </>
  )
}