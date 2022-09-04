import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";

//views
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import ProductDetail from './views/ProductDetail/ProductDetail';




function App() {
  return (
    <Router>
        <div className="App" >
        
        <NavBar />
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/detail/:id' element={<ProductDetail />} />
        </Routes>
        <header className="App-header">
        </header>
       
        </div>
        </Router>
  );
}

export default App;
