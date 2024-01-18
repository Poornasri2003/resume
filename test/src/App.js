import React from 'react';
import './App.css';

import {BrowserRouter , Routes , Route, Navigate} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Templates from './pages/templates';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
    <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
    <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
    <Route path='/templates/:id' element={<ProtectedRoute><Templates/></ProtectedRoute>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
export function ProtectedRoute(props){
   if(localStorage.getItem('shey-resume'))
   {
    return props.children;
   }
   else{
    return <Navigate to="/login" ></Navigate>;
   }
}