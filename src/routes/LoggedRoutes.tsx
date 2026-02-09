import { Route, Routes } from 'react-router'
import { AppLayout } from '../app/components/AppLayout'
import { DashBoard } from '../app/components/Dashboard'

export function LoggedRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout/>}>
        <Route index path="dashboard" element={<DashBoard/>}></Route>
      </Route>
    </Routes>
  )
}