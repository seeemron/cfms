import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import FormulationEditor from './pages/FormulationEditor';
import VersionHistory from './pages/VersionHistory';

export default function App(){
  return (
    <BrowserRouter>
      <nav style={{padding:12, background:'#071428'}}>
        <Link to='/' style={{marginRight:12}}>Login</Link>
        <Link to='/dashboard' style={{marginRight:12}}>Dashboard</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/formulation/:code' element={<FormulationEditor/>} />
        <Route path='/history/:code' element={<VersionHistory/>} />
      </Routes>
    </BrowserRouter>
  );
}
