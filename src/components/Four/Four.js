import React from "react";
import "./four.css";

import data from "./siteData";

//Swiper Imports
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider-style.css";

function FourCard(props) {
  console.log(props);
  const techStack = props.stack.map((item, i) => {
    return <span key={i}>{item}</span>;
  });
  return (
    <div className="four__card">
      <div className="four__card__img-container">
        <img src={props.img} alt="portfolio-img" />
      </div>
      <div className="four__card__main-info">
        <span>{props.name}</span>
        <a href={props.link}>
          <div className="four__card__live-link-cont">
            View Live
            <div>
              <i class="fa-solid fa-arrow-right"></i>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </a>
      </div>
      <div className="four__card__add-info">
        <p>{props.description}</p>
        <div className="four__card_techstack">{techStack}</div>
      </div>
    </div>
  );
}

function Four(props) {
  let [slides, setSlides] = React.useState(3);
  console.log(data);
  let renderedData = data.map((item, i) => {
    console.log(item);
    return (
      <SwiperSlide key={i}>
        <FourCard {...item} />
      </SwiperSlide>
    );
  });
  window.onresize = () => {
    if (window.innerWidth > 1000) {
      setSlides(3);
    } else if (window.innerWidth > 700 && window.innerWidth <= 1000) {
      setSlides(2);
    } else if (window.innerWidth <= 700) {
      setSlides(1);
    }
    console.log("resizing", slides);
  };
  React.useEffect(() => {
    if (window.innerWidth > 1000) {
      setSlides(3);
    } else if (window.innerWidth > 700 && window.innerWidth <= 1000) {
      setSlides(2);
    } else if (window.innerWidth <= 700) {
      setSlides(1);
    }
  }, []);
  return (
    <section className="four">
      <Swiper
        slidesPerView={slides}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        autoplay={true}
      >
        {renderedData}
      </Swiper>
      <div className="four__swiper-nav-container">
        <div className="prev-btn">
          <i class="fa-solid fa-arrow-left"></i>
          Prev
        </div>
        <div className="next-btn">
          Next
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </section>
  );
}

export default Four;
