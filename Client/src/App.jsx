import { Routes, Route, useLocation } from 'react-router-dom'
import { Home } from './Components/Home/Home'
import {Detail} from "./Components/Detail/Detail"
import { DetailProduct } from './Components/Detail/Detail_product'
import { About } from './Components/About/About'
import { Nav } from './Components/Nav/Nav'
import { Products } from './Components/Products/Products'
import { AuthProvider } from './context/AuthContext'
import Footer from './Components/Footer/Footer'
import CreateCampaign from './Components/createCampaign/CreateCampaign'
import { useEffect } from 'react'
import { getCategory, getState } from './redux/actions/action'
import { useDispatch } from 'react-redux'
import ShoppingCart from './Components/shopping cart/ShoppingCart'
import Landing from './Components/landing/Landing'
import { setItem } from './utils/localStorage'
import { useSelector } from 'react-redux'
import './App.css'
import UserProfile from './Components/userComponents/userProfile/userProfile'
function App(){
  const dispatch = useDispatch()
  const location = useLocation()
  const cart = useSelector((state) => state.cartShop);


  useEffect(()=>{
    setItem("cartShop", cart)
    dispatch(getState())
    dispatch(getCategory())
  },[cart])
  return (
    <>

     <AuthProvider>
    {location.pathname !== "/" && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/create/campaign' element={<CreateCampaign/>}/>
        <Route path='/products/detail/:name' element={<DetailProduct/>}/>
        <Route path="/shoppingCart" element={<ShoppingCart />} />
        <Route path="/products" element={<Products />} />
        <Route path='/userProfile' element={<UserProfile/>}/>
         {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    {location.pathname !== "/" && <Footer />}
     </AuthProvider>
    </>
  )
}

export default App
