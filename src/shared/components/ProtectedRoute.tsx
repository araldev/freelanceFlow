import { Navigate, Outlet } from 'react-router'
import type { User } from '../ports/User.d.ts'

export function ProtectedRoute({ user = null, redirectUrl = '/' } : {user?: User | null , redirectUrl?: string }) {

  if (!user) {
    return (
      <Navigate to={redirectUrl} replace />
    )
  } else {
    return (
      <Outlet />
    )
  }
}