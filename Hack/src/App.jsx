import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
      <Header/>
      {/* <h1 className='text-center font-bold text-5xl text-black'>Hii Finance</h1> */}
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
