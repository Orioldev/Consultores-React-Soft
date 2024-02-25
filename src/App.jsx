import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { ForgotPassword } from "./pages/ForgotPassword";
import { PrivateRoute } from "./components/PrivateRoute";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Soport } from "./pages/Soport";

/* Este componente define las rutas a donde se dirigira el Usuario */

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <Login /> }/>
          <Route path="/register" element={ <Register /> }/>
          <Route path="/home" element={ <PrivateRoute /> }>
            <Route path="/home" element={ <Home /> }/>
          </Route>
          <Route path="/soporte" element={ <Soport /> }/>
          <Route path="/recuperar-clave" element={ <ForgotPassword /> }/>

          <Route path="/*" element={ <Navigate to='/' /> }/>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={ 5000 }
        hideProgressBar={ false }
        newestOnTop={ false }
        closeOnClick
        rtl={ false }
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default App
