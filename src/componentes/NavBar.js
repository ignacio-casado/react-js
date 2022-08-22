import React from 'react';
import imagenes from '../assets/imagenes';

const NavBar = (props) =>{
    return(
     <>
     <header className='Header-App'>
   
     <h2 className="Tittle-H2">NACHSHOES</h2>

     <img src={imagenes.img1} alt="Logo de la marca"  className='Logo'/>
     <nav className='NavBar'>
     <div className="Vinculos-Ref">
            <div>
                <a href="" className="Home-Ref">{props.home}</a> 
            </div>
            <div>
                <a href=''  className="Home-Ref">{props.info}</a> 
            </div>
            <div>
                <a href="" className="Home-Ref">{props.help}</a> 
            </div>

            
        </div>
       
     </nav>
    
    
        
     </header>
    
        
            
      
     </>
    )
  
  }

export default NavBar;