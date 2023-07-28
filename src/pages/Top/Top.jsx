import React from 'react';
import { Link } from 'react-router-dom';
import './Top.scss';

const Top = ({title}) => {
  return (
    <section className="about-top">
      <div className="about-top-container">
       <div className="heading">{title}</div>
       {/*  <Link to="/join" className="about-join-button">
          Join the School
        </Link> */}
      </div>
    </section>
  );
};

export default Top;
