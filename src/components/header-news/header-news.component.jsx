// Import Library
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper/core';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import './header-news.styles.scss';

// Install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

const HeaderNews = ({ headerArticle, setPopup }) => {
  /*
    PROPS :
    headerArticle     : an array that contains 5 selected articles
    setPopup          : a function to show Popup component when this component clicked
  */

  return (
    <div className="header-news">
      <Swiper
        autoplay={{
          delay: 7500,
          disableOnInteraction: false
        }}
        spaceBetween={10}
        loop={true}
        pagination={true}
        className="header-news__swiper">
        {headerArticle.map((article) => (
          <SwiperSlide
            onClick={() => setPopup(article)}
            className="header-news__slide"
            key={article.id}>
            <div className="header-news__item">
              <img
                src={`https://obs.line-scdn.net/${article.thumbnail.hash}/w644`}
                alt="header news"
              />
              <div className="header-news__desc">{article.title}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeaderNews;
