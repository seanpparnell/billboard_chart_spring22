import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import Navbar from './components/shared/Navbar';
<<<<<<< HEAD
import Billboards from  './components/billboards/Billboards'
import Artists from './components/artists/Artists';
import Songs from './components/songs/Songs';
=======
import Billboards from  './components/billboards/Billboards';
import Artists from './components/artists/Artists';
import Songs from './components/songs/Songs'
>>>>>>> 8954061 (Songs Folder done)

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/billboards" element={<Billboards />} />
      <Route path="/billboards/:billboardId/artists" element={<Artists />} />
      <Route path="/artists/:artistId/songs" element={<Songs />} />
<<<<<<< HEAD
      <Route path="*" element={ <Nomatch />} />  
=======
      
      <Route path="*" element={<Nomatch />} />  
>>>>>>> 8954061 (Songs Folder done)
    </Routes>
  </>
)

export default App;
