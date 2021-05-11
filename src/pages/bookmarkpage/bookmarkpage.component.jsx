// Import Library
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Import Redux
import { selectBookmark } from '../../redux/bookmark/bookmark.selector';
// Import Component
import Bookmark from '../../components/bookmark/bookmark.component';
import Popup from '../../components/popup/popup.component';
// Import Styles
import './bookmarkpage.styles.scss';

const BookmarkPage = ({ bookmark }) => {
  const [popup, setPopup] = useState(null);
  /*
    PROPS :
    bookmark        :  an object containing the article that has been bookmarked
  */

  return (
    <div className="bookmarkpage">
      <h1>
        Bookmarked News
        <div />
      </h1>
      <div className="bookmarkpage__list">
        {Object.values(bookmark).map((article) => (
          <Bookmark article={article} key={article.id} setPopup={setPopup} />
        ))}
      </div>
      {popup ? <Popup article={popup} setPopup={setPopup} /> : ''}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  bookmark: selectBookmark
});

export default connect(mapStateToProps)(BookmarkPage);
