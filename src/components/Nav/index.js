import React from "react";

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <div class="container">
        <a class="navbar-brand" href="/">
          Brandon Green
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav">
            <a class="nav-link active" href="/">
              About <span class="sr-only">(current)</span>
            </a>

            <a class="nav-link" href="/portfolio">
              Portfolio
            </a>

            <a class="nav-link" href="/contact">
              Contact
            </a>

            <a class="nav-link" href="./assets/pdfs/Resume.pdf">
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
