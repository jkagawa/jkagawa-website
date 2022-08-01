import { NavLink } from 'react-router-dom';

function Nav({toggleMenu}) {

  return (
    <header>
      <div className="header_container">
        <div className="logo_style"><img src="letter-j.png" width="37px" className="img_style" /></div>
        <NavLink to="/" className={({ isActive }) => (isActive ? "link-active" : "")}><div className="nav-button">Projects</div></NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "link-active" : "")}><div className="nav-button">Contact</div></NavLink>
      </div>
      <div className="dropdown_container">
        <div className="logo_style"><img src="letter-j.png" width="37px" className="img_style" /></div>
        <div className="header-title">Home</div>
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleMenu}><img src="menu-icon.png" className="menu_icon img_style" /></button>
        </div>
      </div>
    </header>
  );
}

export default Nav;
