import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { ToastContainer } from "react-toastify";
import UseToken from "./hooks/useToken";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import { useSelector } from "react-redux";

const App = () => {
  const { token } = UseToken();
  console.log(token.token, "token");
  const {modal}= useSelector(state=>state.modal)

  return (
    <div>
      <BrowserRouter>
        {token.token && <Navbar />}
        {modal &&<Modal/>}
        <Routes>
          <Route
            path="/"
            element={!token || !token.token ? <Link to="/auth" /> : <Home />}
          />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </div>
  );
};

export default App;

/* 
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import { ToastContainer } from 'react-toastify';
import UseToken from './hooks/useToken';
import Navbar from './components/Navbar';


const App = () => {
  const { token } = UseToken();

  console.log(token.token, 'token');

  return (
    <div>
      <BrowserRouter>
      {token.token && <Navbar/>}
        <Routes>
          <Route
            path="/"
            element={
              !token ? (
                <Link to="/auth">Lütfen giriş yapın</Link>
              ) : (
                <Home />
              )
            }
          />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;
 */
