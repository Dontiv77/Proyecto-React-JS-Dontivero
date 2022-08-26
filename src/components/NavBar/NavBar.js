import React from "react";
import Cart from "../CartWidget/CartWidget";
const NavBar = () => {
    return (
<nav className ="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className ="navbar-brand" href="/" >Home</a>
  <button className ="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className ="navbar-toggler-icon"></span>
  </button>
  <div className ="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className ="navbar-nav">
      <a className ="nav-item nav-link active" href="/">Productos</a>
      <a className ="nav-item nav-link" href="/">Contacto</a>
      <a className ="nav-item nav-link" href="/">Sobre Nosotros</a>
      <a className ="nav-item nav-link" href="/"><Cart /></a>
    </div>
  </div>
</nav>
    );
};  
export default NavBar;