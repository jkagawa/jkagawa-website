import { useRef, useEffect } from "react";
import projects from './projects.json'

function HomeContent() {
  const ref = useRef(null);
  let projArr = JSON.parse(JSON.stringify(projects));

  let images = [];
  let titles = [];
  let descriptions = [];
  let colors = [];
  for(let i=0; i<projArr.length; i++) {
    let proj = projArr[i];
    images.push(proj.image);
    titles.push(proj.title);
    descriptions.push(proj.description);
    colors.push(proj.color);
  }

  const positionObj = {
    "position1": 0,
    "position2": 1,
    "position3": 3
  }

  useEffect(() => {
    const desc = document.getElementById("description");
    desc.innerHTML = descriptions[0];

    const firstChild = desc.firstChild;
    firstChild.style.background = colors[0];
    firstChild.style.border = "1px solid " + colors[0];
    firstChild.style.color = "white";

    const p1 = document.getElementById("position1");
    const p2 = document.getElementById("position2");
    const p3 = document.getElementById("position3");
    var myInterval = setInterval(() => move(p1, p2, p3), 5000);
    p2.addEventListener("click", () => clear(myInterval));
    p3.addEventListener("click", () => clear(myInterval));

    generateCarouselIndicator(0);

  }, []);

  function generateCarouselIndicator(currentIndex) {
    const carouselIndicator = document.getElementById("carousel-indicator");
    carouselIndicator.innerHTML = "";
    for(let i=0; i<images.length; i++) {
      const el = document.createElement("SPAN");
      el.style.height = "15px";
      el.style.width = "15px";
      el.style.borderRadius = "50%";
      el.style.display = "inline-block";
      el.style.margin = "5px";
      if(i == currentIndex) { el.classList.add("primary-color"); }
      else { el.classList.add("not-primary-color"); }
      carouselIndicator.appendChild(el);
    }
  }

  function move(p1, p2, p3) {
    moveLeft(p1, p2, p3);
    setTimeout(() => moveRight(p1, p2, p3), 250);
    setTimeout(() => moveLeft(p1, p2, p3), 500);
    setTimeout(() => moveRight(p1, p2, p3), 750);
  }
  function moveLeft(p1, p2, p3) {
    p1.style.transform = "translatex(-10%) scale(1)";
    p2.style.transform = "translatex(40%) scale(.8)";
  }
  function moveRight(p1, p2, p3) {
    p1.style.transform = "translatex(0%) scale(1)";
    p2.style.transform = "translatex(50%) scale(.6)";
  }
  function clear(myInterval) {
    console.log(myInterval);
    clearInterval(myInterval);
  }

  function changeOrder(e) {
    let index = Number(e.currentTarget.getAttribute("data-id"));
    generateCarouselIndicator(index);
    let pos = Object.keys(positionObj).find(key => positionObj[key] === Number(index));
    const p1 = document.getElementById(pos);
    const desc = document.getElementById("description");
    p1.style.transform = "translatex(0) scale(1)";
    p1.style.opacity = "1";
    p1.style.zIndex = "2";
    p1.getElementsByClassName("proj-title")[0].style.visibility = "visible";
    p1.getElementsByClassName("proj-title")[0].innerHTML = titles[index];
    p1.getElementsByTagName("img")[0].src = images[index];
    desc.innerHTML = descriptions[index];
    const firstChild = desc.firstChild;
    firstChild.style.background = colors[index];
    firstChild.style.border = "1px solid " + colors[index];
    firstChild.style.color = "white";

    let leftIndex = index - 1;
    let rightIndex = index + 1;

    if(leftIndex < 0) {
      leftIndex = images.length - 1;
    }
    else if(rightIndex >= images.length) {
      rightIndex = 0;
    }

    let posNumber = Number(pos.slice(-1));
    let leftPosition = "position" + String(posNumber-1);
    let rightPosition = "position" + String(posNumber+1);
    if(posNumber-1 < 1) {
      leftPosition = "position3";
    }
    else if(posNumber+1 > 3) {
      rightPosition = "position1";
    }
    positionObj[leftPosition] = leftIndex;
    positionObj[rightPosition] = rightIndex;

    let leftEl = document.getElementById(leftPosition);
    let rightEl = document.getElementById(rightPosition);
    leftEl.style.transform = "translatex(-50%) scale(.6)";
    leftEl.style.opacity = "0.4";
    leftEl.style.zIndex = "1";
    leftEl.getElementsByClassName("proj-title")[0].style.visibility = "hidden";
    leftEl.getElementsByTagName("img")[0].src = images[leftIndex];
    leftEl.setAttribute("data-id", leftIndex);

    rightEl.style.transform = "translatex(50%) scale(.6)";
    rightEl.style.opacity = "0.4";
    rightEl.style.zIndex = "1";
    rightEl.getElementsByClassName("proj-title")[0].style.visibility = "hidden";
    rightEl.getElementsByTagName("img")[0].src = images[rightIndex];
    rightEl.setAttribute("data-id", rightIndex);

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
                  <label className="card" id="position1" data-id="0" onClick={changeOrder}>
                    <div className="proj-title">Climbing Spot</div>
                    <img src="climbing-website-demo.gif" alt="project" />
                  </label>
                  <label className="card" id="position2" data-id="1" onClick={changeOrder}>
                    <div className="proj-title">My Budget</div>
                    <img src="budget-app-demo-crop.gif" alt="project" />
                  </label>
                  <label className="card" id="position3" data-id="3" onClick={changeOrder}>
                    <div className="proj-title">Quote Generator</div>
                    <img src="quote-generator-demo.png" alt="project" />
                  </label>
                </div>
              </div>
              <div id="carousel-indicator"></div>
              <div id="description"></div>
            </div>
        </div>

    </div>
  );
}

export default HomeContent;
