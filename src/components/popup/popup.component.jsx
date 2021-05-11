// Import Library
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Import Redux
import { selectBookmark } from '../../redux/bookmark/bookmark.selector';
import {
  createBookmark,
  deleteBookmark
} from '../../redux/bookmark/bookmark.actions';
// Import Styles
import './popup.styles.scss';

const Popup = ({
  setPopup,
  article,
  bookmark,
  deleteBookmark,
  createBookmark
}) => {
  /*
    PROPS :
    deleteBookmark  :  a fucntion to delete the bookmark from redux state
    createBookmark  :  a function to create the bookmark
    setPopup        :  a function to show Popup component when this component clicked
    article         :  an object containing information about article,
    bookmark        :  an object containing the article that has been bookmarked
  */
  const [hover, setHover] = useState(false);

  return (
    <div className="popup">
      <div className="popup__content">
        <img
          src={`https://obs.line-scdn.net/${article.thumbnail.hash}/w644`}
          alt="article"
        />
        <div className="popup__text">
          <p>{article.title}</p>
          <span>{article.publisher}</span>
          <div className="popup__button">
            <a href={article.url.url}>
              <button>See Article</button>
            </a>
            <div
              className="popup__bookmark"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}>
              {bookmark && bookmark[article.id] ? (
                <i
                  className="fas fa-bookmark"
                  onClick={() => deleteBookmark(article.id)}></i>
              ) : hover ? (
                <i
                  className="fas fa-bookmark"
                  onClick={() => createBookmark(article)}></i>
              ) : (
                <i
                  className="far fa-bookmark"
                  onClick={() => createBookmark(article)}></i>
              )}
            </div>
          </div>
        </div>
        <i className="fas fa-times" onClick={() => setPopup(null)}></i>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createBookmark: (data) => dispatch(createBookmark(data)),
  deleteBookmark: (data) => dispatch(deleteBookmark(data))
});

const mapStateToProps = createStructuredSelector({
  bookmark: selectBookmark
});

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
