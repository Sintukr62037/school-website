// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import './Ending.scss';

const Ending = ({ width }) => {
  return (
    <section className="Ending">
      <div className="ending-container">
        <EndingText width={width} />
       {/*  <Link to="/join">Download the Admission Form</Link> */}
      </div>
    </section>
  );
};

const EndingText = ({ width }) => {
  if (width < 700) {
    // Vertical phones
    return (
      <div className="banner">
        Unlock your child's full potential at SRIJAN Play Way.
      </div>
    );
  } else {
    // Landscape phones, tablets and desktops
    return (
      // eslint-disable-next-line
      <div className="banner" role="text">
        Unlock your child's full potential at 
        <br />
        SRIJAN Play Way.
      </div>
    );
  }
};

export default Ending;
