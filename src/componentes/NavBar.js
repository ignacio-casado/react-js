import React from 'react';
import imagenes from '../assets/imagenes';
import {Link} from "react-router-dom"


const NavBar = () =>{
    return(
      
      
      <>
      <div className='navi'>
      <nav className="nav">
  <a className="nav-link active" aria-current="page">
  <Link to='/'><h2 className="Tittle-H2">NACHSHOES</h2></Link>
  </a>
  <a className="nav-link" >
  <Link to='/category/12'><h3>Air Force</h3></Link> 
  </a>
  <a className="nav-link"><Link to='/category/11'><h3>Air Jordan</h3></Link></a>
  <a className="nav-link disabled">
  <img src="https://www.vectorkhazana.com/assets/images/products/Sneaker_Red.png" alt="Logo de la marca"  className='Logo'/> 
  </a>
</nav>


      </div>
   
     
     
      
      
      

      
      </>
      
      
     
     
     );    
      
    
    }
export default NavBar;

   





   
