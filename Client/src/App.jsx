import { Routes, Route } from 'react-router-dom'
import { Home } from './Components/Home/Home'
import {Detail} from "./Components/Detail/Detail"
import { DetailCampain } from './Components/Detail/Detail_campain'
import './App.css'
import CreateCampaign from './Components/createCampaign/CreateCampaign'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/detail/:id' element={<Detail/>}/>
<<<<<<< HEAD
        <Route path='/create/campaign' element={<CreateCampaign/>}/>
=======
        <Route path='/detail/camp' element={<DetailCampain/>}/>
>>>>>>> 28efa4e1cf66bb319912a8af485d6cb2340a1977
      </Routes>
    </>
  )
}

export default App
