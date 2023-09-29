import { Routes, Route } from 'react-router-dom'
import { Home } from './Components/Home/Home'
import {Detail} from "./Components/Detail/Detail"
import './App.css'
import CreateCampaign from './Components/createCampaign/CreateCampaign'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/create/campaign' element={<CreateCampaign/>}/>
      </Routes>
    </>
  )
}

export default App
