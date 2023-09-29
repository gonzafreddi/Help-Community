import { Routes, Route } from 'react-router-dom'
import { Home } from './Components/Home/Home'
import {Detail} from "./Components/Detail/Detail"
import { DetailCampain } from './Components/Detail/Detail_campain'
import './App.css'
import { Nav } from './Components/Nav/Nav'
import CreateCampaign from './Components/createCampaign/CreateCampaign'

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/create/campaign' element={<CreateCampaign/>}/>
        <Route path='/detail/camp' element={<DetailCampain/>}/>
      </Routes>
    </>
  )
}

export default App
