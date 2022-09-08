import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";

//views
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import ProductDetail from './views/ProductDetail/ProductDetail';
import Joyeria from './views/Joyeria/Joyeria';
import Hombre from './views/Hombre/Hombre';
import Mujer from './views/Mujer/Mujer';
import Electronica from './views/Electronica/Electronica';
import Cart from './components/CartWidget/CartWidget';
import Category from './components/Category/Category';


function App() {
  return (
    <Router>
        <div className="App" >
        
        <NavBar />
        <Category/>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Joyeria' element={<Joyeria/>} />
        <Route path='/Hombre' element={<Hombre/>} />
        <Route path='/Mujer' element={<Mujer/>} />
        <Route path='/Electronica' element={<Electronica/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/detail/:id' element={<ProductDetail />} />
        <Route path='/Cart' element={<Cart />} />
        </Routes>
        <header className="App-header">
        </header>
      
        </div>
        </Router>
  );
}

export default App;
