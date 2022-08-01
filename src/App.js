import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useRef, useEffect } from "react";
import HomeContent from './HomeContent';
import ContactContent from './ContactContent';
import Nav from './Nav';
import SliderMenu from './SliderMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function App() {
  const menu_ref = useRef(null);
  const container_ref = useRef(null);
  const lightDarkToggle_ref = useRef(null);
  const toggleIcon_ref = useRef(null);
  const lightIcon_ref = useRef(null);
  const darkIcon_ref = useRef(null);


  function toggleMenu() {
    const menu = menu_ref.current;
    const container = container_ref.current;
    menu.classList.toggle("show");
    container.classList.toggle("opacity_effect");
  }

  useEffect(() => {
    const toggleSwitch = lightDarkToggle_ref.current;
    // const nav = document.getElementById('nav');
    // const toggleIcon = document.getElementById('toggle-icon');
    const toggleIcon = toggleIcon_ref.current;
    // const textBox = document.getElementById('text-box');

    function toggleLightDarkMode(isLight) {
      const lightIcon = lightIcon_ref.current;
      const darkIcon = darkIcon_ref.current;
      isLight ? darkIcon.style.display = "none" : lightIcon.style.display = "none";
      isLight ? lightIcon.style.display = "inline-block" : darkIcon.style.display = "inline-block";
    }

    function switchTheme(event) {
      if(event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme','dark');
        toggleLightDarkMode(false);
      }
      else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme','light');
        toggleLightDarkMode(true);
      }
    }

    //Event Listener
    toggleSwitch.addEventListener('change', switchTheme);

    //Check Local Storage For Theme
    const currTheme = localStorage.getItem('theme');
    if(currTheme) {
      document.documentElement.setAttribute('data-theme', currTheme);
      if(currTheme==='dark') {
        toggleSwitch.checked = true;
        toggleLightDarkMode(false);
      }
      else {
        toggleSwitch.checked = false;
        toggleLightDarkMode(true);
      }
    }
  }, []);

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
          <Nav toggleMenu={toggleMenu}/>
          <div id="mid">
              <div className="theme-switch-wrapper">
                <span id="toggle-icon" ref={toggleIcon_ref}>
                  <span className="toggle-text"></span>
                  <i className="fas fa-sun"></i>
                  <FontAwesomeIcon icon={faSun} className="fas" ref={lightIcon_ref} />
                  <FontAwesomeIcon icon={faMoon} className="fas hide" ref={darkIcon_ref} />
                </span>
                <label className="theme-switch">
                  <input type="checkbox" ref={lightDarkToggle_ref}/>
                  <div className="slider round"></div>
                </label>
              </div>
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
