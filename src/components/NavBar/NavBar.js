import React from "react";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
      
<nav className ="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className ="navbar-brand" href="/" >Home</a>
  <button className ="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className ="navbar-toggler-icon"></span>
  </button>
  <div className ="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className ="navbar-nav">
      <Link className ="nav-item nav-link" to="/About">Sobre Nosotros</Link>
      <Link className ="nav-item nav-link" to="/Contact ">Contacto</Link>
      <Link className ="nav-item nav-link" to="/Cart"><CartWidget /></Link>
    </div>
  </div>
</nav>
    );
};  
export default NavBar;