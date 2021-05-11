import React from 'react';
import './section-news.styles.scss';

const SectionNews = ({ article, setPopup }) => {
  /*
    PROPS :
    setPopup        :  a function to show Popup component when this component clicked
    article         :  an object containing information about article
  */

  return (
    <div className="section-news" onClick={() => setPopup(article)}>
      <img
        src={`https://obs.line-scdn.net/${article.thumbnail.hash}/w644`}
        alt="article"
      />
      <p>{article.title}</p>
      <span>{article.publisher}</span>
    </div>
  );
};

export default SectionNews;
