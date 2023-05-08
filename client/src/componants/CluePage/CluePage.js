import React from 'react';

const CluePage = ({text,link}) => {
    return (
        <div className="clue-page">
          <h2>{text}</h2>
          <p>For more details, click <a href={link} target="_blank" rel="noreferrer">here</a>.</p>
        </div>
      );
  
}
export default CluePage;
