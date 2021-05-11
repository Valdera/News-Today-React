// Import Library
import React from 'react';
import { connect } from 'react-redux';
// Import Redux
import { deleteBookmark } from '../../redux/bookmark/bookmark.actions';
// Import Styles
import './bookmark.styles.scss';

const Bookmark = ({ deleteBookmark, article, setPopup }) => {
  /*
    PROPS :
    deleteBookmark  :  a fucntion to delete the bookmark from redux state
    setPopup        :  a function to show Popup component when this component clicked
    article         :  an object containing information about article
  */
  return (
    <div className="bookmark">
      <img
        src={`https://obs.line-scdn.net/${article.thumbnail.hash}/w644`}
        alt="bookmarked article"
        onClick={() => setPopup(article)}
      />
      <div className="bookmark__content">
        <div className="bookmark__text" onClick={() => setPopup(article)}>
          <p>{article.title}</p>
          <span>{article.publisher}</span>
        </div>
        <i
          className="fas fa-trash-alt"
          onClick={() => deleteBookmark(article.id)}></i>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteBookmark: (data) => dispatch(deleteBookmark(data))
});

export default connect(null, mapDispatchToProps)(Bookmark);
