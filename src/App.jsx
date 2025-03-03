import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import DashboardLayout from './layouts/DashboardLayout'
import EnrolledUsers from './pages/EnrolledUsers'
import AdminUsers from './pages/AdminUsers'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< DashboardLayout />}>
            <Route index element={<Navigate to='/enrolled-users' replace />} />
            <Route path='enrolled-users' element={<EnrolledUsers />} />
            <Route path='users' element={<AdminUsers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
