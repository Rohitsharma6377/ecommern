import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Authlayout from './components/auth/layout';
import AuthLogin from './pages/auth/login';
import AuthRegister from './pages/auth/register';
import AdminLayout from './components/admin/layout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProducts from './pages/admin/Products';
import AdminOrder from './pages/admin/Order';
import Adminfeature from './pages/admin/feature';

const App = () => {
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <Routes>
        <Route path="/auth" element={<Authlayout/>}>

        <Route path='login' element={<AuthLogin/>}/>
        <Route path='register' element={<AuthRegister/>}/>
        </Route>
        <Route path='/admin' element={<AdminLayout/>}>
        <Route path='dashboard' element={<AdminDashboard/>}/>
        <Route path='products' element={<AdminProducts/>}/>
        <Route path='order' element={<AdminOrder/>}/>
        <Route path='feature' element={<Adminfeature/>}/>
        
        </Route>
      </Routes>
    </div>
  )
}

export default App;
