import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";

//views

import About from './views/About/About';
import Contact from './views/Contact/Contact';
import Category from './components/Category/Category';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './components/CartContext/CarContext';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <Router>
        <div className="App" >
        <CartProvider>
        <NavBar />
        <Category/>
        <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/detail/:id' element={<ItemDetailContainer />} />
        <Route path='/Category/:categoriaId' element={<ItemListContainer/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Cart' element={<Cart />} />
        </Routes>
        <header className="App-header">
        </header>
        </CartProvider>
        </div>
        </Router>
  );
}

export default App;
