import React from 'react';
import Cards from './cards.js';
import './api.scss';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpeg';
import img4 from './img4.gif';
const api = () => {
  return (
      <div className="apiContainer">
        
        <div className="apiHeading">
            <h2>All APIs</h2>
        </div>

        <div className="cardsContainer">
            <Cards img={img1} text1="API Name" text2="The descriptipn of the API in quick brief and we will truncate it here..." />
            <Cards img={img2} text1="API Name" text2="The descriptipn of the API in quick brief and we will truncate it here..." />
            <Cards img={img3} text1="API Name" text2="The descriptipn of the API in quick brief and we will truncate it here..." />
            <Cards img={img4} text1="API Name" text2="The descriptipn of the API in quick brief and we will truncate it here..." />
        </div>

        <div className="cardsContainer">
            <Cards img={img1} text1="API Name" text2="The descriptipn of the API in quick brief and we will truncate it here..." />
            <Cards img={img2} text1="API Name" text2="The descriptipn of the API in quick brief and we will truncate it here..." />
            <Cards img={img3} text1="API Name" text2="The descriptipn of the API in quick brief and we will truncate it here..." />
            <Cards img={img4} text1="API Name" text2="The descriptipn of the API in quick brief and we will truncate it here..." />
        </div>

      </div>
  );
};

export default api;
