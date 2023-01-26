import React from "react";
import "./one.css";
function One(props) {
  return (
    <header className="one">
      <div className="one__navigation">
        <div className="one__navigation__home-page">
          <div>
            Welcome to My Website!
            <div>
              <i class="fa-solid fa-arrow-right"></i>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
        {/* <div className="one__navigation__others">
          <div>Portfolio</div>
          <div>Catagory</div>
        </div> */}
      </div>
      <div className="one__social-media">
        <div>
          <a href="https://t.me/kal_ay">
            <i class="fa-brands fa-telegram"></i>
          </a>
        </div>
        <div>
          <a href="https://twitter.com/">
            <i class="fa-brands fa-twitter"></i>
          </a>
        </div>
        <div>
          <a href="https://github.com/Kaleab-Ayenew">
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default One;
