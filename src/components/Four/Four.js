import React from "react";
import "./four.css";

//Swiper Imports
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider-style.css";

function FourCard(props) {
  return (
    <div className="four__card">
      <div className="four__card__img-container">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/0*080KJgq133UZdlHE"
          alt="portfolio-img"
        />
      </div>
      <div className="four__card__main-info">
        <span>Timeshop</span>
        <a href="#">
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
        <p>
          This is a website design for a wrist watch store website called
          Timeshop.
        </p>
        <div className="four__card_techstack">
          <span>React</span>
          <span>Lottie</span>
          <span>Swiper</span>
          <span>Bootstrap</span>
        </div>
      </div>
    </div>
  );
}

function Four(props) {
  let [slides, setSlides] = React.useState(3);
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
        <SwiperSlide>
          <FourCard />
        </SwiperSlide>
        <SwiperSlide>
          <FourCard />
        </SwiperSlide>
        <SwiperSlide>
          <FourCard />
        </SwiperSlide>
        <SwiperSlide>
          <FourCard />
        </SwiperSlide>
        <SwiperSlide>
          <FourCard />
        </SwiperSlide>
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
