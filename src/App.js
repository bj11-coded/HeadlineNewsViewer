import './App.css';
import Contact from './Components/Contact';
import EveryNews from './Components/EveryNews';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
          <BrowserRouter> 
          <Routes>
              <Route exact path='/' element={<News/>}> </Route>
              <Route exact path='/news' element={<EveryNews/>}> </Route>
              <Route exact path='/contact' element={<Contact/>}> </Route>
          </Routes>
          </BrowserRouter>
      </div>
      <Footer/>

      
    </>
  );
}

export default App;
