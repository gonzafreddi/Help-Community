import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Detail } from "./Components/Detail/Detail";
import { DetailProduct } from "./Components/Detail/Detail_product";
import { About } from "./Components/About/About";
import { Nav } from "./Components/Nav/Nav";
import { Products } from "./Components/Products/Products";
import { AuthProvider } from "./context/AuthContext";
import Footer from "./Components/Footer/Footer";
import CreateCampaign from "./Components/createCampaign/CreateCampaign";
import { useEffect } from "react";
import { getCategory, getState } from "./redux/actions/action";
import { useDispatch } from "react-redux";
import ShoppingCart from "./Components/shopping cart/ShoppingCart";
import { setItem } from "./utils/localStorage";
import { useSelector } from "react-redux";
import "./App.css";
import UserProfile from "./Components/userComponents/userProfile/userProfile";
import Admin from "./Components/adminComponents/admin/admin";
import UserBuys from "./Components/buys/UserBuys";
import { AllBuys } from "./Components/buys/allBuysAdmin";
import { BrowserRouter as Switch } from "react-router-dom";
import SideBarAdmin from "./Components/adminComponents/SideBarAdmin/SideBarAdmin";
import MailingForm from "./Components/adminComponents/mailing/mailingForm";
import CreateProduct from "./Components/createProduct/CreateProduct.jsx";


import { useEffect } from 'react'
import { getCategory, getState } from './redux/actions/action'
import { useDispatch } from 'react-redux'
import ShoppingCart from './Components/shopping cart/ShoppingCart'
import { setItem } from './utils/localStorage'
import { useSelector } from 'react-redux'
// import './App.css'
import UserProfile from './Components/userComponents/userProfile/userProfile'
import UserBuys from './Components/buys/UserBuys'
import { Products } from './Components/Products/Products'

import AdminLayout from './Components/adminComponents/admin/AdminLayout'; 
import HomeUnauthorized from './Components/adminComponents/HomeUnauthorized/HomeAnauthorized'
// import { BrowserRouter as Switch } from 'react-router-dom';
// import SideBarAdmin from './Components/adminComponents/SideBarAdmin/SideBarAdmin'
// import Dashboard from './Components/adminComponents/Dashboard/Dashboard'
// import { AllBuys } from './Components/buys/allBuysAdmin'
import CreateProduct from './Components/createProduct/CreateProduct'
import CreateCampaign from './Components/createCampaign/CreateCampaign'


function App(){
  const dispatch = useDispatch()
  const location = useLocation()
  const cart = useSelector((state) => state.cartShop);

  useEffect(() => {
    setItem("cartShop", cart);
    dispatch(getState());
    dispatch(getCategory());
  }, [cart]);
  return (
    <>

     <AuthProvider>
    {location.pathname !== "/" && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/create/campaign' element={<CreateCampaign/>}/>
        <Route path='/create/product/:productName?' element={<CreateProduct/>}/>
        <Route path='/products/detail/:name' element={<DetailProduct/>}/>
        <Route path="/shoppingCart" element={<ShoppingCart />} />
        <Route path="/products" element={<Products />} />
        <Route path='/userProfile' element={<UserProfile/>}/>
        <Route path='/buys' element={<UserBuys/>}/>
        


          <Route path="/admin/*" element={<AdminLayout />} />
          <Route path="/home" element={<HomeUnauthorized />} />
        

            {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      
    {location.pathname !== "/" && <Footer />}
     </AuthProvider>
    </>
  );
}

// function AdminLayout() {
//   return (
//     <>
//     <div className="coco">
//       <SideBarAdmin />
//     <div className="content">
//       <Routes>
//         <Route path="/" element={<Admin />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/products/create" element={<CreateProduct />} />
//         <Route path='/create/campaign' element={<CreateCampaign/>}/>
//         <Route path='/allbuys' element={<AllBuys/>}/>
//         <Route path="/dashboard" element={<Dashboard />} />
//         {/* Agrega otras rutas de admin según sea necesario */}
//       </Routes>
//       </div>
//       </div>
//     </>
//   );
// }

// <Route path="/admin" element={<Admin />} />
// <Route path="/admin/users" element={<Users />} />
// <Route path="/admin/products" element={<Products />} />
// <Route path="/admin/products/create" element={<CreateProduct />} />
//  <Route path="/admin/products/:id" element={<editProduct />} />
// <Route path='/admin/create/campaign' element={<CreateCampaign/>}/>
//  <Route path="/admin/dashboard" element={<Dashboard />} />
// <Route path="/admin/mailing" element={<Mailing />} />

export default App;
