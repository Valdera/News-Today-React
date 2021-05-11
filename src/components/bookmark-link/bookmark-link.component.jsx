// Import Library
import React from 'react';
import { withRouter } from 'react-router-dom';
// Import Styles
import './bookmark-link.styles.scss';

const BookmarkLink = ({ history }) => {
  /* 
    PROPS :
    history   : an object props from withRouter module
  */

  return (
    <div className="bookmark-link" onClick={() => history.push('/bookmark')}>
      <i className="fas fa-bookmark"></i>
    </div>
  );
};

export default withRouter(BookmarkLink);
