import React from "react"
import Register from "./pages/Register"
import Main from "./components/Main"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Login from "./pages/Login"
import AuthProvider from "./AuthProvider"



function App() {
  return (
    <>
      <div className="min-h-screen bg-darkgray text-white ">
        <AuthProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
          </BrowserRouter>



        </AuthProvider>




      </div>



    </>
  )
}

export default App
