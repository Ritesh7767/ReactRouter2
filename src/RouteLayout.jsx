import React, {useState} from 'react'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Products from './pages/Products'
import About from './pages/About'
import {Routes, Route} from "react-router-dom"

const RouteLayout = () => {

  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<ProductDetail/>}/>
        <Route path='/AboutUs' element={<About/>}/>
    </Routes>
  )
}

export default RouteLayout