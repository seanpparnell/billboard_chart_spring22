import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import Navbar from './components/shared/Navbar';
import Billboards from  './components/billboards/Billboards'
import Artists from './components/artists/Artists'

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/billboards" element={<Billboards />} />
      <Route path="/billboards/:billboardId/artists" element={<Artists />} />
      <Route path="*" element={ <Nomatch />} />  
    </Routes>
  </>
)

export default App;
