import { useState } from 'react'
import './App.css'
import { Routes } from 'react-router-dom'
import NavLayout from './NavLayout'
import RouteLayout from './RouteLayout'
import DataProvider from './Data'


function App() {

  return (
    <>
    <DataProvider>

      <NavLayout/>
      <RouteLayout/>
      
    </DataProvider>
    </>
  )
}

export default App
