import HomeContent from './HomeContent';

function App() {

  function toggleMenu() {
      // document.getElementById("main_dropdown").classList.toggle("show");
      // document.getElementById("container").classList.toggle("opacity_effect");
  }

  return (
    <div className="App">
      <header className="App-header">
        <div id="main_dropdown" className="dropdown-content">
            <div className="dropdown-content-head">
                <div onClick={toggleMenu()} className="closebtn"><img src="static/images/close-icon.png" className="close_icon img_style" /></div>
            </div>
            <div><a href="/" className="currentpage_nav">Projects</a></div>
            <div><a href="/contact">Contact</a></div>
        </div>
        <div id="container">
            <header>
              <div className="header_container">
                <div className="logo_style"><img src="static/images/letter-j.png" width="37px" className="img_style" /></div>
                <a href="/"><div className="nav-button{% if request.endpoint == 'index' %} button-main{% endif %}">Projects</div></a>
                <a href="/contact"><div className="nav-button{% if request.endpoint == 'contact_page' %} button-main{% endif %}">Contact</div></a>
              </div>
              <div className="dropdown_container">
                <div className="logo_style"><img src="static/images/letter-j.png" width="37px" className="img_style" /></div>
                <div className="header-title">Home</div>
                <div className="dropdown">
                  <button className="dropbtn" onclick="toggleMenu()"><img src="static/images/menu-icon.png" className="menu_icon img_style" /></button>
                </div>
              </div>
            </header>

            <HomeContent />
        </div>
      </header>
    </div>
  );
}

export default App;
