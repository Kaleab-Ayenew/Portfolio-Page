import React from "react";
import "./three.css";
function Three(props) {
  return (
    <section className="three">
      <div className="three__span-list">
        <span>Web Stack</span>
        <span>React.js</span>
        <span>Redux</span>
        <span>Django</span>
        <span>Python</span>
        <span>Django REST</span>
        <span>PostgreSQL</span>
      </div>
      <div className="three__text">
        I am <span>Kaleab Ayenew</span>, a Fullstack web developer with more
        than two years of experiance. You can contact me at{" "}
        <span>kalishayish16@gmail.com</span>. Thanks!
      </div>
    </section>
  );
}

export default Three;
