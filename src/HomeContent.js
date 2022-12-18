import { useRef } from "react";

function HomeContent() {
  const ref = useRef(null);

  return (
    <div>
        <div id="proj-intro" style={{height: "100%", display: "flex", alignItems: "center", flexFlow: "wrap", paddingTop: "70px"}}>
          <div className="intro_style page-row" style={{width: "100%"}}>
              <div className="div_profile_image"><img src="profile-photo.jpeg" className="img_profile img_style" /></div>
              <div className="div_profile_text">
                Hello! My name is Joshua Kagawa and I'm a software developer.
                <div style={{margin: "25px 0 50px"}}><a href="https://github.com/jkagawa" target="_blank" className="link-style"><span>Visit my GitHub</span></a></div>
              </div>
          </div>
        </div>

        <div className="non-intro-style-dark" style={{height: "1000px", display: "flex", alignItems: "center", flexFlow: "wrap", paddingTop: "10px", paddingBottom: "0px"}}>
          <div className="project-group page-row">
            <div className="card-container">
              <input type="radio" name="slider" id="item-1" defaultChecked={true}/>
              <input type="radio" name="slider" id="item-2" />
              <input type="radio" name="slider" id="item-3" />
              <input type="radio" name="slider" id="item-4" />
            <div className="cards">
              <label className="card" htmlFor="item-1" id="project-1">
                <div className="proj-title">Climbing Spot</div>
                <img src="climbing-website-demo.gif" alt="project" />
                <div className="proj-desc">
                  <div className="project-body">A website that enables the discovery of rock climbing locations and rock climbers, powered by a RESTful API</div>
                  <div className="project-body">Allows users to add, edit, and remove climbing locations and climbers. Specific features
          are locked through the use of sign-in and authentication functionality.</div>
                  <div className="project-body"><a href="https://climbingspot.pythonanywhere.com/" target="_blank" className="link-style">Link to the project</a></div>
                </div>
              </label>
              <label className="card" htmlFor="item-2" id="project-2">
                <span className="proj-title">My Budget</span>
                <img src="budget-app-demo-crop.gif" alt="project" />
                <div className="proj-desc">
                  <div className="project-body">A budgeting app that lets users keep track of how much they are spending in a clean and
            easy-to-use interface</div>
                  <div className="project-body">Allows users to set a monthly budget and enter expenses.</div>
                  <div className="project-body"><a href="https://play.google.com/store/apps/details?id=com.jkagawa.mybudget" target="_blank" className="link-style">Link to the project</a></div>
                </div>
              </label>
              <label className="card" htmlFor="item-3" id="project-3">
                <span className="proj-title">Task Wall</span>
                <img src="task-wall-demo.PNG" alt="project" />
                <div className="proj-desc">
                  <div className="project-body"><a href="https://task-wall.netlify.app/" target="_blank" className="link-style">Link to the project</a></div>
                </div>
              </label>
            </div>
            </div>
          </div>

          <div className="non-intro-style page-row" style={{paddingTop: "15px", paddingBottom: "15px", width: "100%", alignSelf: "end", height: "50px"}}>
            <div style={{fontSize: "2rem"}}><a href="#proj-intro" className="jump-button"><i className="fas fa-chevron-up"></i></a><a href="#proj-budget" className="jump-button" style={{marginLeft: "15px"}}><i className="fas fa-chevron-down"></i></a></div>
          </div>
        </div>

    </div>
  );
}

export default HomeContent;
