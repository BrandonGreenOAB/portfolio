import React from "react";

function Main() {
  return (
    <div class="container mt-2 bg-light">
      <div class="row indexBox">
        <div class="col-md-9 bg-light indexBox">
          <h1 class="topHeaderIndex mt-3 h1">About Me:</h1>

          <hr />

          <img
            id="pfp"
            class="mr-3 mb-1"
            src={"./assets/images/screenshot.png"}
            width="150"
            height="150"
            alt="picture of Brandon"
          />

          <p class="aboutMe">
            Hello! My name is Brandon and there's a lot to learn about me! My
            hobbies include gaming whether it's first person shooters, turn
            based logical games, or even just fun party games, I do it all. My
            passion definitely belongs to computers. I enjoy building computers
            when I can, so if you're thinking of building a computer and saving
            some money, give me a shout and I'd be more than happy to put it
            together for you! I joined the UCF Coding Bootcamp because I figured
            a fast paced program that will keep me focused will optimize the
            amount of education I get out of it. I have learned a little JS
            before this bootcamp but I'm ready to be a master of both the front
            end as well as the back end side of development. This page is going
            to be my starter portfolio page. It will be simple and include a
            variety of basics you can find in web development.
          </p>
          <hr />
          <p class="aboutMe">you can reach me at the following:</p>
          <br />
          <br />
          <p class="aboutMe">
            email:{" "}
            <a href="mailto: Brandon.Green@knights.ucf.edu">
              Brandon.Green@knights.ucf.edu
            </a>
          </p>
          <p class="aboutMe">
            Mobile: <a href="tel:2393224608">239-322-4608</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
