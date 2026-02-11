import { Navigate, Route, Routes } from 'react-router'
import { AppLayout } from '../app/components/AppLayout'
import { Dashboard } from '../app/components/Dashboard'
import { Projects } from '../app/components/Projects'
import { Invoices } from '../app/components/Invoices'
import { Clients } from '../app/components/Clients'
import { Profile } from '../app/components/Profile'
import { PathnameApp } from '../app/schemes/pathname'

export function LoggedRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout/>}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="projects" element={<Projects />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="clients" element={<Clients />} />
        <Route path="profile" element={<Profile />} />
    
        <Route index element={<Dashboard />} />
    
        <Route path="*" element={<Navigate to={PathnameApp.Dashboard} replace/>} />
      </Route>
    </Routes>
  )
}