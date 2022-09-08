import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";

//views

import About from './views/About/About';
import Contact from './views/Contact/Contact';
import Cart from './components/CartWidget/CartWidget';
import Category from './components/Category/Category';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CategoryList from './components/Category/CategoryList';


function App() {
  return (
    <Router>
        <div className="App" >
        
        <NavBar />
        <Category/>
        <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/detail/:id' element={<ItemDetailContainer />} />
        <Route path='/Category/:categoryid' element={<CategoryList/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Cart' element={<Cart />} />
        </Routes>
        <header className="App-header">
        </header>
      
        </div>
        </Router>
  );
}

export default App;
