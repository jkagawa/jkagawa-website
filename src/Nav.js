import { NavLink } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Nav({toggleMenu, changeTitle, title, lightDarkToggle_ref}) {

  return (
    <header>
      <div className="header_container">
        <div className="logo_style"><img src="letter-j.png" width="37px" className="img_style" /></div>
        <NavLink to="/" className={({ isActive }) => (isActive ? "link-active" : "")} onClick={() => changeTitle(1)}><div className="nav-button">Projects</div></NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "link-active" : "")} onClick={() => changeTitle(2)}><div className="nav-button">Contact</div></NavLink>
        <ThemeSwitcher/>
      </div>
      <div className="dropdown_container">
        <div className="logo_style"><img src="letter-j.png" width="37px" className="img_style" /></div>
        <div className="header-title">{title}</div>
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleMenu}><FontAwesomeIcon icon={faBars} className="menu_icon"/></button>
        </div>
      </div>
    </header>
  );
}

export default Nav;
