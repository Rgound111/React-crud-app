
import './App.css';

//Components
import Navbar from './components/Navbar';
import CFinterview from './components/CFinterview';
import Alluser from './components/Alluser';
import Adduser from './components/Adduser';
import Edituser from './components/Edituser';

import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<CFinterview />} />
        <Route path='/all' element={<Alluser />} />
        <Route path='/add' element={<Adduser />} />
        <Route path='/edit/:id' element={<Edituser/>} > </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
