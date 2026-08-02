
import Navbar from './components/Navbar'
import ProductForm from './components/ProductForm'
import Dashboard from './pages/Dashboard'
import ProductDetails from './pages/ProductDetails'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
    
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path='/add-product' element={<ProductForm/>}/>
          <Route path="/product/:id" element={<ProductDetails/>}/>
        </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
