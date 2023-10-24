import React from "react";
import "./two.css";
function Two(props) {
  return (
    <section className="two">
      <div className="two__container">
        <div className="two__name-container">
          <h1>Kaleab Ayenew —</h1>
          <div className="two__name-container__bottom">
            <div>
              <span>Hire Me!</span>
              <div>
                <i class="fa-solid fa-arrow-right"></i>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
              <a
                className="hire-link"
                href="mailto:kalishayish16@gmail.com?subject=Work"
              ></a>
            </div>
            <span>Fullstack Web Developer</span>
          </div>
        </div>
        <div className="two__image-container">
          <img src={require("../../images/my-image.jpg")} alt="Main-Image" />
          <span>Available for Work</span>
        </div>
      </div>
    </section>
  );
}

export default Two;
