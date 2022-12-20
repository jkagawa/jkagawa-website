import { useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function ThemeSwitcher() {
  const ref = useRef(null);

  const lightDarkToggle_ref = useRef(null);
  const toggleIcon_ref = useRef(null);
  const lightIcon_ref = useRef(null);
  const darkIcon_ref = useRef(null);



  useEffect(() => {
    const toggleSwitch = lightDarkToggle_ref.current;
    const toggleIcon = toggleIcon_ref.current;

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

    setTheme(toggleSwitch);

    window.addEventListener('resize', setTheme);

    function setTheme(toggleSwitch) {
      console.log("Theme change");
      //Check Local Storage For Theme
      const currTheme = localStorage.getItem('theme');
      if(currTheme) {
        document.documentElement.setAttribute('data-theme', currTheme);
        if(currTheme==='dark') {
          // toggleSwitch.checked = true;
          lightDarkToggle_ref.current.checked = true;
          toggleLightDarkMode(false);
        }
        else {
          // toggleSwitch.checked = false;
          lightDarkToggle_ref.current.checked = false;
          toggleLightDarkMode(true);
        }
      }
    }

  }, []);

  return (
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
  );
}

export default ThemeSwitcher;
