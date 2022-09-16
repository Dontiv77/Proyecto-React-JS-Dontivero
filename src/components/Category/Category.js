import React from "react";
import { Link } from 'react-router-dom';


const Category = () => {
        return (
            <div>
            <h3>Category</h3>
            <ul className="nav">
            <li className="nav-item">
            <Link className="nav-link category" to="/Category/jewelery">Joyeria</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link category" to="/Category/men's clothing">Hombre</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link category" to="/Category/women's clothing">Mujer</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link category" to="/Category/electronics">Electronica</Link>
            </li>
            </ul>
            </div>
    
    );
};  
export default Category;