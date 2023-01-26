import React from "react";
import "./two.css";
function Two(props) {
  return (
    <section className="two">
      <div className="two__container">
        <div className="two__name-container">
          <h1>Nicolas Simons —</h1>
          <div className="two__name-container__bottom">
            <div>
              <span>Contact Me</span>
              <div>
                <i class="fa-solid fa-arrow-right"></i>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </div>
            <span>Art Director — MetroLab</span>
          </div>
        </div>
        <div className="two__image-container">
          <img
            src="https://thumbs.dreamstime.com/b/ceo-businessman-handsome-ceo-businessman-portrait-black-white-successful-ceo-businessman-jacket-ceo-ceo-businessman-121516068.jpg"
            alt="Main-Image"
          />
          <span>Fullstack Developer</span>
        </div>
      </div>
    </section>
  );
}

export default Two;
