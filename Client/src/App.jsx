import { Routes, Route } from 'react-router-dom'
import { Home } from './Components/Home/Home'
import {Detail} from "./Components/Detail/Detail"
import { DetailCampain } from './Components/Detail/Detail_campain'
import { About } from './Components/About/About'
import { Nav } from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import './App.css'
import CreateCampaign from './Components/createCampaign/CreateCampaign'
import { useEffect } from 'react'
import { getCategory, getState } from './redux/actions/action'
import { useDispatch } from 'react-redux'

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
        <Route path="/" element={<Home />} />
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/create/campaign' element={<CreateCampaign/>}/>
        <Route path='/detail/camp' element={<DetailCampain/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
