import React from "react";

function Contact() {
  return (
    <form>
     { /*placed into a container to keep organized */}
      <div class="container mt-2 bg-light">
        {/*header*/}
        <h1 class="topHeader">Contact Page</h1>
        <hr />
        {/*three rows and a column in each*/}
        <div class="row">
          <div class="col-lg-3">
            <div class="form-group">
              <label for="exampleFormControlInput1">Name</label>

              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="John Doe"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3">
            <div class="form-group">
              <label for="exampleFormControlInput2">Email address</label>

              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput2"
                placeholder="name@example.com"
              />
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message</label>

          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Please enter your message here."
            rows="3"
          ></textarea>
        </div>
        <button id="submit" type="button" class="btn mb-3">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Contact;
