import Photo from '../img/Photo.png';

import '../App.css';



const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg py-3 px-3 nav-color fixed-top">
        <div className="container">
            <a href="#" className="navbar-brand"><img src={Photo} alt={Photo} className='photo' /><span className='fs-6 px-2'>Haladucosmetic</span></a>
          
            <button 
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"><span class="navbar-toggler-icon"></span></button>

        <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a href="#mission" className="nav-link">Mission</a></li>
                <li className="nav-item"><a href="#product" className="nav-link">Product</a></li>
                <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
        </div>
        </div>
    </nav>
  )
}

export default Nav
