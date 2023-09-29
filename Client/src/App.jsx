import { Routes, Route } from 'react-router-dom'
import { Home } from './Components/Home/Home'
import {Detail} from "./Components/Detail/Detail"
import { DetailCampain } from './Components/Detail/Detail_campain'
import { About } from './Components/About/About'
import { Nav } from './Components/Nav/Nav'
import './App.css'

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/camp' element={<DetailCampain/>}/>
      </Routes>
    </>
  )
}

export default App
