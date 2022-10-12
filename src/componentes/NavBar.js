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
  <Link to='/category/BBB'><h3>Air Force</h3></Link> 
  </a>
  <a className="nav-link"><Link to='/category/AAA'><h3>Air Jordan</h3></Link></a>
  <a className="nav-link ">
  <Link to='/'><img src="https://www.vectorkhazana.com/assets/images/products/Sneaker_Red.png" alt="Logo de la marca"  className='Logo'/></Link>
  </a>
  <a className="nav-link" >
    <Link to='/cart'><img src='https://cdn-icons-png.flaticon.com/512/107/107831.png' alt='logo' className='imagencarrito'/></Link>
  </a>
</nav>


      </div>
   
     
     
      
      
      

      
      </>
      
      
     
     
     );    
      
    
    }
export default NavBar;

   





   
