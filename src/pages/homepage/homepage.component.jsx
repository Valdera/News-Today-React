// Import Library
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Import Redux
import {
  selectNews,
  selectSelectedNews,
  selectHeaderArticle
} from '../../redux/news/news.selector';
// Import Component
import HeaderNews from '../../components/header-news/header-news.component';
import Section from '../../components/section/section.component';
import BookmarkLink from '../../components/bookmark-link/bookmark-link.component';
import Popup from '../../components/popup/popup.component';
import Spinner from '../../components/spinner/spinner.component';
// Import Styles
import { generateRandomPallete } from './homepage.utils';
import './homepage.styles.scss';

const HomePage = ({ selectedNews, headerArticle }) => {
  /*
    PROPS :
    headerArticle     : an array that contains 5 selected articles
    selectedNews      : an object conatining the information of the selectedNews
  */

  const [popup, setPopup] = useState(null);

  return (
    <div className="homepage">
      {selectedNews ? (
        <div className="homepage__header">
          {headerArticle ? (
            <HeaderNews headerArticle={headerArticle} setPopup={setPopup} />
          ) : (
            ''
          )}
        </div>
      ) : (
        <div className="homepage__spinner">
          <Spinner />
        </div>
      )}

      <div className="homepage__news">
        {selectedNews
          ? selectedNews.templates.map((section, id) => (
              <Section
                section={section}
                key={section.id}
                setPopup={setPopup}
                color={generateRandomPallete(id)}
              />
            ))
          : ''}
      </div>
      <BookmarkLink />
      {popup ? <Popup article={popup} setPopup={setPopup} /> : ''}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  news: selectNews,
  selectedNews: selectSelectedNews,
  headerArticle: selectHeaderArticle
});

export default connect(mapStateToProps)(HomePage);
