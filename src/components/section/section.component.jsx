import React from 'react';
import SectionNews from '../section-news/section-news.component';

import './section.styles.scss';

const Section = ({ section, setPopup, color }) => {
  /*
    PROPS :
    section         :  an object containing all the article that related to the current section
    setPopup        :  a function to show Popup component when this component clicked
    color           :  a string that represent the color from pallete
  */

  return (
    <div className="section">
      <div className="section__title" style={{ backgroundColor: color }}>
        <h1>{section.title}</h1>
      </div>
      <div className="section__grid">
        {section.sections[0].articles.map((article) => (
          <SectionNews article={article} key={article.id} setPopup={setPopup} />
        ))}
      </div>
    </div>
  );
};

export default Section;
