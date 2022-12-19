import { useRef, useEffect } from "react";

function HomeContent() {
  const ref = useRef(null);

  const positions = ["position1", "position2", "position3"];
  const images = ["climbing-website-demo.gif", "budget-app-demo-crop.gif", "task-wall-demo.PNG"];
  const description = ['A website that enables the discovery of rock climbing locations and rock climbers, powered by a RESTful API<br/><br/>Allows users to add, edit, and remove climbing locations and climbers. Specific features are locked through the use of sign-in and authentication functionality.<br/><br/><a href="https://climbingspot.pythonanywhere.com/" target="_blank" class="link-style">Link to the project</a>', 'A budgeting app that lets users keep track of how much they are spending in a clean and easy-to-use interface<br/><br/>Allows users to set a monthly budget and enter expenses.<br/><br/><a href="https://play.google.com/store/apps/details?id=com.jkagawa.mybudget" target="_blank" class="link-style">Link to the project</a>', '<a href="https://play.google.com/store/apps/details?id=com.jkagawa.mybudget" target="_blank" class="link-style">Link to the project</a>'];

  useEffect(() => {
  }, []);

  function changeOrder(e) {
    var indexOfSelected = e.currentTarget.getAttribute("data-id")-1;
    var idOfSelected = positions[indexOfSelected];
    const p1 = document.getElementById(idOfSelected);
    const desc = document.getElementById("description");
    p1.style.transform = "translatex(0) scale(1)";
    p1.style.opacity = "1";
    p1.style.zIndex = "2";
    p1.getElementsByClassName("proj-title")[0].style.visibility = "visible";
    desc.innerHTML = description[indexOfSelected];
    var index = indexOfSelected;
    for(var i=0; i<positions.length-1 ; i++) {
      index = index + 1;
      if(index >= positions.length) { index = 0; }
      var id = positions[index];
      const p2 = document.getElementById(id);
      if(i==0) {
        p2.style.transform = "translatex(50%) scale(.6)";
        p2.style.opacity = "0.4";
        p2.style.zIndex = "1";
      } else if(i==1) {
        p2.style.transform = "translatex(-50%) scale(.6)";
        p2.style.opacity = "0.4";
        p2.style.zIndex = "1";
      }
      p2.getElementsByClassName("proj-title")[0].style.visibility = "hidden";

    }

  }

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

        <div className="non-intro-style-dark" style={{height: "1000px", width: "100%", display: "flex", alignItems: "center", flexFlow: "wrap", paddingTop: "10px", paddingBottom: "0px"}}>
            <div className="project-group page-row">
              <div className="card-container">
                <div className="cards">
                  <label className="card" id="position1" data-id="1" onClick={changeOrder}>
                    <div className="proj-title">Climbing Spot</div>
                    <img src="climbing-website-demo.gif" alt="project" />
                  </label>
                  <label className="card" id="position2" data-id="2" onClick={changeOrder}>
                    <div className="proj-title">My Budget</div>
                    <img src="budget-app-demo-crop.gif" alt="project" />
                  </label>
                  <label className="card" id="position3" data-id="3" onClick={changeOrder}>
                    <div className="proj-title">Task Wall</div>
                    <img src="task-wall-demo.PNG" alt="project" />
                  </label>
                </div>
              </div>
              <div id="description">A website that enables the discovery of rock climbing locations and rock climbers, powered by a RESTful API<br/><br/>Allows users to add, edit, and remove climbing locations and climbers. Specific features
      are locked through the use of sign-in and authentication functionality.<br/><br/><a href="https://climbingspot.pythonanywhere.com/" target="_blank" className="link-style">Link to the project</a></div>
            </div>
        </div>

        <div className="non-intro-style page-row" style={{paddingTop: "15px", paddingBottom: "15px", width: "100%", alignSelf: "end", height: "50px"}}>
            <div style={{fontSize: "2rem"}}><a href="#proj-intro" className="jump-button"><i className="fas fa-chevron-up"></i></a><a href="#proj-budget" className="jump-button" style={{marginLeft: "15px"}}><i className="fas fa-chevron-down"></i></a></div>
        </div>

    </div>
  );
}

export default HomeContent;
