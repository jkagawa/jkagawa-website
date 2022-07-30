function HomeContent() {

  return (
    <div id="mid">
        <div className="theme-switch-wrapper">
          <span id="toggle-icon">
            <span className="toggle-text"></span>
            <i className="fas fa-sun"></i>
          </span>
          <label className="theme-switch">
            <input type="checkbox" />
            <div className="slider round"></div>
          </label>
        </div>
        <div id="proj-intro" style={{minHeight: "calc(100vh - 70px)", display: "flex", alignItems: "center", flexFlow: "wrap", paddingTop: "70px"}}>
          <div className="intro_style page-row" style={{width: "100%"}}>
              <div className="div_profile_image"><img src="static/images/profile-photo.jpeg" className="img_profile img_style" /></div>
              <div className="div_profile_text">
                Hello! My name is Joshua Kagawa. I'm a software developer.
                <div style={{margin: "25px 0 50px"}}><a href="https://github.com/jkagawa" target="_blank" className="link-style"><span>Visit my GitHub</span></a></div>
              </div>
          </div>
          <div className="non-intro-style-dark page-row" style={{paddingTop: "15px", paddingBottom: "15px", width: "100%", alignSelf: "end", height: "50px"}}>
            <div style={{fontSize: "2rem"}}><a href="#proj-climbing" className="jump-button"><i className="fas fa-chevron-down"></i></a></div>
          </div>
        </div>
        <div id="proj-climbing" className="non-intro-style-dark" style={{minHeight: "calc(100vh - 70px)", display: "flex", alignItems: "center", flexFlow: "wrap", paddingTop: "70px", paddingBottom: "0px"}}>
          <div className="project-group page-row">
            <div className="project-title">Climbing Spot</div><div className="badge">Recent Project</div>
            <div className="project-body-image"><img src="static/images/climbing-website-demo.gif" className="img_style" style={{width: "1080px", maxWidth: "100%", objectFit: "cover", height: "365px"}} /></div>
            <div className="project-body">A website that enables the discovery of rock climbing locations and rock climbers, powered by a RESTful API</div>
            <div className="project-body">Allows users to add, edit, and remove climbing locations and climbers. Specific features
    are locked through the use of sign-in and authentication functionality.</div>
            <div className="project-body">Link to the <a href="https://climbing-spot-app.herokuapp.com" target="_blank" className="link-style">Climbing Spot website</a></div>
          </div>
          <div className="non-intro-style page-row" style={{paddingTop: "15px", paddingBottom: "15px", width: "100%", alignSelf: "end", height: "50px"}}>
            <div style={{fontSize: "2rem"}}><a href="#proj-intro" className="jump-button"><i className="fas fa-chevron-up"></i></a><a href="#proj-budget" className="jump-button" style={{marginLeft: "15px"}}><i className="fas fa-chevron-down"></i></a></div>
          </div>
        </div>
      <div id="proj-budget" className="non-intro-style" style={{minHeight: "calc(100vh - 70px)", display: "flex", alignItems: "center", flexFlow: "wrap", paddingTop: "70px", paddingBottom: "0px"}}>
        <div className="project-group page-row">
          <div className="project-title">My Budget</div>
          <div className="project-body-image"><img src="static/images/budget-app-demo.gif" className="img_style" style={{width: "300px", maxWidth: "50%"}} /></div>
          <div className="project-body">A budgeting app that lets users keep track of how much they are spending in a clean and
    easy-to-use interface</div>
          <div className="project-body">Allows users to set a monthly budget and enter expenses.</div>
          <div className="project-body">Link to the <a href="https://play.google.com/store/apps/details?id=com.jkagawa.mybudget" target="_blank" className="link-style">My Budget Android app</a></div>
          </div>
          <div className="non-intro-style-dark page-row" style={{paddingTop: "15px", paddingBottom: "15px", width: "100%", alignSelf: "end", height: "50px"}}>
            <div style={{fontSize: "2rem"}}><a href="#proj-climbing" className="jump-button"><i className="fas fa-chevron-up"></i></a></div>
          </div>
      </div>
    </div>
  );
}

export default HomeContent;
