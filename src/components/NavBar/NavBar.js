import { NavLink } from 'react-router-dom';
import './navbar.css';
import CartWidget from './CartWidget';

const NavBar = ({bgColor}) => {

  

  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container">
      <a className="navbar-brand" href="#"><span className="text-success">De bolsillo</span> - Librería</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <NavLink className='mx-3 text-primary' to='/'>Home</NavLink>
            <NavLink className='mx-3 text-primary' to='/items'>Productos</NavLink>
            <NavLink className='mx-3 ms-4 text-primary' to='/cart'>
              <CartWidget/>
            </NavLink>
          
        </div>
      </div>
    </div>
  </nav>

    
  )
}

export default NavBar