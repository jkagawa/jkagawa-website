import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useRef, useEffect } from "react";
import HomeContent from './HomeContent';
import ContactContent from './ContactContent';
import Nav from './Nav';
import SliderMenu from './SliderMenu';

function App() {
  const menu_ref = useRef(null);
  const container_ref = useRef(null);
  const lightDarkToggle_ref = useRef(null);
  const toggleIcon_ref = useRef(null);
  const lightIcon_ref = useRef(null);
  const darkIcon_ref = useRef(null);

  const [title, setTitle] = useState('Projects');

  useEffect(() => {
    document.title = title + ' | Joshua Kagawa';
  }, [title]);

  function changeTitle(code) {
    if(code===1) {
      setTitle('Projects');
    } else if(code===2) {
      setTitle('Contact');
    }
  }

  function toggleMenu(code) {
    changeTitle(code)
    const menu = menu_ref.current;
    const container = container_ref.current;
    menu.classList.toggle("show");
    container.classList.toggle("opacity_effect");
  }

  window.onscroll = function(event) {
    var doc_el = document.documentElement;
    doc_el = (doc_el.clientHeight)? doc_el : document.body;
    var target_el = document.querySelectorAll('.non-intro-style-dark');
    var cont = document.querySelector('.header_container');
    var cont2 = document.querySelector('.dropdown_container');

    //Check if top of element hits bottom of fixed header
    if (doc_el.scrollTop > (target_el[0].offsetTop-50)) {
      cont.classList.add("container_style");
      cont2.classList.add("container_style");
    }
    else {
      cont.classList.remove("container_style");
      cont2.classList.remove("container_style");
    }
  };

  return (
    <div>
      <BrowserRouter>
        <SliderMenu toggleMenu={toggleMenu} menu_ref={menu_ref}/>
        <div id="container" ref={container_ref}>
          <Nav toggleMenu={toggleMenu} changeTitle={changeTitle} title={title}/>
          <div id="mid">

                <Routes>
                  <Route path="/" element={<HomeContent lightDarkToggle_ref={lightDarkToggle_ref} toggleIcon_ref={toggleIcon_ref} lightIcon_ref={lightIcon_ref} darkIcon_ref={darkIcon_ref} />} />
                  <Route path="/contact" element={<ContactContent />} />
                </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
