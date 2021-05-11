// Import Library
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
// Import Redux
import { setSelectedNews } from '../../redux/news/news.actions';
import { selectNews, selectSelectedNews } from '../../redux/news/news.selector';
// Import Styles
import 'swiper/swiper.min.css';
import './navbar.styles.scss';

const Navbar = ({ setSelectedNews, news, selectedNews, history }) => {
  /*
    PROPS :
    setSelectedNews   : a function to select the specified news from the news redux state
    news              : an object containing every news
    selectedNews      : an object conatining the information of the selectedNews
    history           : an object props from withRouter module
  */

  return (
    <div className="navbar">
      <div className="navbar__title">
        <p onClick={() => history.push('/')}>
          News<span>TODAY</span>
        </p>
      </div>

      <div className="navbar__item">
        <i className="fas fa-chevron-left"></i>

        <Swiper
          slidesPerView={10}
          spaceBetween={0}
          freeMode={true}
          loop={false}
          className="swiper">
          {/* Render when news and selectedNews has been loaded */}
          {news && selectedNews
            ? Object.keys(news).map((item) => (
                <SwiperSlide
                  className={`swiper__item ${
                    selectedNews.name === item ? 'swiper__item--selected' : ''
                  }`}
                  key={item}
                  onClick={async () => {
                    await setSelectedNews(news[item]);
                    history.push(`/news/${item}`);
                  }}>
                  {item}
                </SwiperSlide>
              ))
            : ''}
        </Swiper>
        <i className="fas fa-chevron-right"></i>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setSelectedNews: (data) => dispatch(setSelectedNews(data))
});

const mapStateToProps = createStructuredSelector({
  news: selectNews,
  selectedNews: selectSelectedNews
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
