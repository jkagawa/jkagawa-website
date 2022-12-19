import { useRef } from "react";
import { NavLink } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

function SliderMenu({toggleMenu, menu_ref}) {
  const ref = useRef(null);

  return (
    <div id="main_dropdown" className="dropdown-content" ref={menu_ref}>
        <div className="dropdown-content-head">
            <div onClick={toggleMenu} className="closebtn"><img src="close-icon.png" className="close_icon img_style" /></div>
        </div>
        <div><NavLink to="/" onClick={() => toggleMenu(1)}>Projects</NavLink></div>
        <div><NavLink to="/contact" onClick={() => toggleMenu(2)}>Contact</NavLink></div>
        <ThemeSwitcher/>
    </div>
  );
}

export default SliderMenu;
