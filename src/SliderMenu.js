import { useRef } from "react";

function SliderMenu({toggleMenu, menu_ref}) {
  const ref = useRef(null);

  return (
    <div id="main_dropdown" className="dropdown-content" ref={menu_ref}>
        <div className="dropdown-content-head">
            <div onClick={toggleMenu} className="closebtn"><img src="close-icon.png" className="close_icon img_style" /></div>
        </div>
        <div><a href="/">Projects</a></div>
        <div><a href="/contact">Contact</a></div>
    </div>
  );
}

export default SliderMenu;
