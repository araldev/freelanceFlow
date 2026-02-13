import { Routes, Route, Navigate } from 'react-router'
import { NotFound404 } from './shared/pages/NotFound404'
import { ProtectedRoute } from './shared/components/ProtectedRoute.tsx'
import { AuthRoutes } from './routes/AuthRoutes.tsx'
import { AppRoutes } from './routes/AppRoutes.tsx'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Navigate to={'/auth/login'} />}></Route>
        <Route path="/auth/*" element={<AuthRoutes/>}></Route>

        <Route element={<ProtectedRoute/>}>
          <Route path='/app/*' element={<AppRoutes/>}></Route>
        </Route>

        <Route path="*" element={<NotFound404/>} />
      </Routes>
    </>
  )
}