import { Routes, Route } from 'react-router-dom'
import { Home } from './Components/Home/Home'
import {Detail} from "./Components/Detail/Detail"
import { DetailProduct } from './Components/Detail/Detail_product'
import { About } from './Components/About/About'
import { Nav } from './Components/Nav/Nav'
import { Products } from './Components/Products/Products'
import Footer from './Components/Footer/Footer'
import './App.css'
import CreateCampaign from './Components/createCampaign/CreateCampaign'
import { useEffect } from 'react'
import { getCategory, getState } from './redux/actions/action'
import { useDispatch } from 'react-redux'
import Landing from './Components/landing/Landing'
import ShoppingCart from './Components/shopping cart/ShoppingCart'

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getState())
    dispatch(getCategory())
  },[])
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/create/campaign' element={<CreateCampaign/>}/>
        <Route path='/products/detail/:name' element={<DetailProduct/>}/>
        <Route path="/products" element={<Products />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
