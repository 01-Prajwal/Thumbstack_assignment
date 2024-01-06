import './App.scss';
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import Content from './Components/Home/Content';

// import Home from './Components/Home/Home';

import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import Show from './Components/Projs/Show';
import Home from './Components/Home/Home';
import Card from './Components/Home/Card';
// import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>

      <Route path='/' element={[<Home/>,<Card/>]}/>
      <Route path='/contact' element={[<Contact/>]}/>
      <Route path='/projects' element={[<Show/>]}/>
        
     
    
    </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
