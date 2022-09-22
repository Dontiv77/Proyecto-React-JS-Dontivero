import React from "react";
import { Link } from 'react-router-dom';


const Category = () => {
        return (
            <div>
            <h3>Category</h3>
            <ul className="nav">
            <li className="nav-item">
            <Link className="nav-link category" to="/Category/joyeria">joyeria</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link category" to="/Category/hombre">Hombre</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link category" to="/Category/mujer">Mujer</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link category" to="/Category/electronica">Electronica</Link>
            </li>
            </ul>
            </div>
    
    );
};  
export default Category;