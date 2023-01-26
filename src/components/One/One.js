import React from "react";
import "./one.css";
function One(props) {
  return (
    <header className="one">
      <div className="one__navigation">
        <div className="one__navigation__home-page">
          <div>
            Home Page
            <div>
              <i class="fa-solid fa-arrow-right"></i>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className="one__navigation__others">
          <div>Portfolio</div>
          <div>Catagory</div>
        </div>
      </div>
      <div className="one__social-media">
        <div>
          <i class="fab fa-facebook-f"></i>
        </div>
        <div>
          <i class="fa-brands fa-twitter"></i>
        </div>
        <div>
          <i class="fa-brands fa-github"></i>
        </div>
      </div>
    </header>
  );
}

export default One;
