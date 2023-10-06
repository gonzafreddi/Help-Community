import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout'; // Importa el componente de diseño
// import Home from './Components/Home/Home';
import {Detail} from './Components/Detail/Detail';
import {DetailCampain} from './Components/Detail/Detail_campain';
import {About} from './Components/About/About';
import {Products} from './Components/Products/Products';
import CreateCampaign from './Components/createCampaign/CreateCampaign';
import Landing from './Components/landing/Landing';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/detail/:id" element={<Layout><Detail /></Layout> } />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/create/campaign" element={<Layout><CreateCampaign /></Layout>} />
      <Route path="/detail/camp" element={<Layout><DetailCampain /></Layout>} />
      <Route path="/products" element={<Layout><Products /></Layout>} />
    </Routes>
  );
}

export default App;