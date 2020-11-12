import React from "react";

function Portfolio() {
  return (
    <div class="container mt-4">
      <div class="row" id="placeholder">
        <h1 class="topHeader">Portfolio</h1>
        <div class="col-md-12 bg-light mainBox">
          <br />
          <div class="col-md-6 projRow">
            <div class="col-md-6 d-flex justify-content-center mt-3">
              <a
                class="repo"
                href="https://github.com/BrandonGreenOAB/Peckish"
                target="_blank"
              >
                Peckish Repo
              </a>
              <a
                href="https://brandongreenoab.github.io/Peckish/"
                target="_blank"
              >
                <img
                  class="circle"
                  src="./assets/images/PeckishThumb.PNG"
                  width="200px"
                  height="200px"
                  alt="Peckish Thumbnail"
                />
              </a>
              <p class="banner">Peckish Recipe Finder</p>
            </div>
            <hr />

            <div class="col-md-6 d-flex justify-content-center mt-3">
              <a
                class="repo2"
                href="https://github.com/BrandonGreenOAB/Weather_Forecast"
                target="_blank"
              >
                Coding Dock Repo
              </a>
              <a href="https://projecttwoucf.herokuapp.com/" target="_blank">
                <img
                  class="circle"
                  src="./assets/images/codingDock.PNG"
                  width="200px"
                  height="200px"
                  alt=""
                />
              </a>

              <p class="banner">Coding Dock!</p>
            </div>
            <hr />
          </div>

          <div class="col-sm-6 projRow">
            <div class="col-md-6 d-flex justify-content-center mt-3">
              <a
                class="repo"
                href="https://github.com/BrandonGreenOAB/Work_Day_Scheduler"
                target="_blank"
              >
                Scheduler Repo
              </a>
              <a
                href="https://brandongreenoab.github.io/Work_Day_Scheduler/"
                target="_blank"
              >
                <img
                  class="circle"
                  src="./assets/images/WorkDayThumb.PNG"
                  width="200px"
                  height="200px"
                  alt=""
                />
              </a>

              <p class="banner">Work Day Scheduler</p>
            </div>
            <hr />
            <div class="col-md-6 d-flex justify-content-center mt-3">
              <a
                class="repo2"
                href="https://github.com/BrandonGreenOAB/Code-Generator"
                target="_blank"
              >
                Code Repo
              </a>
              <a
                href="https://brandongreenoab.github.io/Code-Generator/"
                target="_blank"
              >
                <img
                  class="circle"
                  src="./assets/images/CodeThumb.PNG"
                  width="200px"
                  height="200px"
                  alt=""
                />
              </a>

              <p class="banner">Password Generator</p>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;