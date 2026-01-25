import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const CategorySlider = () => {
  return (
    <div className="homeCategorySlider">
      <div className="categoryContainer">
        <Swiper
          navigation = {true}
          slidesPerView={"auto"}
          freeMode= {true}
          watchOverflow={true}
           grabCursor={true}
          spaceBetween={10}
          modules={[Navigation]}
          className="categorySwiper1"
        >
          <SwiperSlide>
            <Link to={'/'}>
              <div className="swiperSlide">
                <img
                  src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                  alt="Category Image"
                  className="sliderImage"
                />
                <h3 className="imageName">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={'/'}>
              <div className="swiperSlide">
                <img
                  src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                  alt="Category Image"
                  className="sliderImage"
                />
                <h3 className="imageName">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={'/'}>
              <div className="swiperSlide">
                <img
                  src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                  alt="Category Image"
                  className="sliderImage"
                />
                <h3 className="imageName">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={'/'}>
              <div className="swiperSlide">
                <img
                  src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                  alt="Category Image"
                  className="sliderImage"
                />
                <h3 className="imageName">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={'/'}>
              <div className="swiperSlide">
                <img
                  src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                  alt="Category Image"
                  className="sliderImage"
                />
                <h3 className="imageName">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={'/'}>
              <div className="swiperSlide">
                <img
                  src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                  alt="Category Image"
                  className="sliderImage"
                />
                <h3 className="imageName">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={'/'}>
              <div className="swiperSlide">
                <img
                  src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                  alt="Category Image"
                  className="sliderImage"
                />
                <h3 className="imageName">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={'/'}>
              <div className="swiperSlide">
                <img
                  src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                  alt="Category Image"
                  className="sliderImage"
                />
                <h3 className="imageName">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={'/'}>
              <div className="swiperSlide">
                <img
                  src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                  alt="Category Image"
                  className="sliderImage"
                />
                <h3 className="imageName">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={'/'}>
              <div className="swiperSlide">
                <img
                  src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                  alt="Category Image"
                  className="sliderImage"
                />
                <h3 className="imageName">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={'/'}>
              <div className="swiperSlide">
                <img
                  src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                  alt="Category Image"
                  className="sliderImage"
                />
                <h3 className="imageName">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={'/'}>
              <div className="swiperSlide">
                <img
                  src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                  alt="Category Image"
                  className="sliderImage"
                />
                <h3 className="imageName">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={'/'}>
              <div className="swiperSlide">
                <img
                  src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                  alt="Category Image"
                  className="sliderImage"
                />
                <h3 className="imageName">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={'/'}>
              <div className="swiperSlide">
                <img
                  src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                  alt="Category Image"
                  className="sliderImage"
                />
                <h3 className="imageName">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={'/'}>
              <div className="swiperSlide">
                <img
                  src="https://api.spicezgold.com/download/file_1734525204708_fash.png"
                  alt="Category Image"
                  className="sliderImage"
                />
                <h3 className="imageName">Smart Tablet</h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CategorySlider;
