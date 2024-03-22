import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/home'
import Product from './pages/Product'
import Customer from './pages/Customer'
import Order from './pages/Order'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/customer' element={<Customer/>}/>
        <Route path='/order' element={<Order/>}/>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
