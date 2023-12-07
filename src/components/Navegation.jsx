import { Link } from "react-router-dom"
import './Navegation.css'




export const Navegation = () => {
  return (
    
    <header className="header">
      <p className="logo">Logo</p>

        <nav className="navbar">
          <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/pociones'target="blank">Pociones</Link></li>
                <li><Link to='/productos'>Productos</Link></li>
                <li><Link to='/carrito'>Carrito</Link></li>
                <li><Link to='/favorites'>Favoritos</Link></li>
          </ul>
        </nav>
    </header>
    
  )
}
