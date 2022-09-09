import React from 'react';
import imagenes from '../assets/imagenes';
import CartWidget from '../componentes/CartWidget'
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

   {/*  <header className='Header-App' >
   
       
              
              <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
        
            
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Modelos
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            
              <a className="nav-link disabled"><CartWidget /></a> 
            
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
              
      </header>
          
               */}
            
            
        
     
 