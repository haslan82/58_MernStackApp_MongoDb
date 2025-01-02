import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import { ToastContainer } from 'react-toastify';



const App = () => {
  return (
   <div>
    <BrowserRouter>
   <Routes> 
     <Route path="/" element={<Home />} />
     <Route path="/auth" element={<Auth/>} />
   
    
   </Routes>
   </BrowserRouter>

<ToastContainer />
   </div>
  )
}

export default App
