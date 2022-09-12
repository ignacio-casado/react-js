import React from 'react';
import imagenes from '../assets/imagenes';
import {Link} from "react-router-dom"


const NavBar = () =>{
    return(
      
      
      <>
      <Link to='/'><h2 className="Tittle-H2">NACHSHOES</h2></Link>
      <Link to='/category/12'><h3>Air Force</h3></Link> 
      <Link to='/category/11'><h3>Air Jordan</h3></Link>
       <img src={imagenes.img1} alt="Logo de la marca"  className='Logo'/> 
      

      
      </>
      
      
     
     
     );    
      
    
    }
export default NavBar;

   
