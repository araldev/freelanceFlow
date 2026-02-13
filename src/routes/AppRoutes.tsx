import { Navigate, Route, Routes } from 'react-router'
import { AppLayout } from '../app/layouts/AppLayout'
import { Dashboard } from '../app/pages/Dashboard/Dashboard'
import { Projects } from '../app/pages/Projects/Projects'
import { Invoices } from '../app/pages/Invoices/Invoices'
import { Clients } from '../app/pages/Clients/Clients'
import { Profile } from '../app/pages/Profile/Profile'
import { PathnameApp } from '../app/schemes/pathname'

export function AppRoutes() {
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