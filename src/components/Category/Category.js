import React from "react";
import { Link } from 'react-router-dom';
import './Category.css';

const Category = () => {
        return (
            <div>
            <h3>Category</h3>
            <ul class="nav">
            <li class="nav-item">
            <Link class="nav-link category" to="/Category/Joyeria">Joyeria</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link category" to="/Category/Hombre">Hombre</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link category" to="/Category/Mujer">Mujer</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link category" to="/Category/Electronica">Electronica</Link>
            </li>
            </ul>
            </div>


    
    
    );
};  
export default Category;