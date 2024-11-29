import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SquaresScreen.css";
import Grid from './Grid';

const SquaresScreen = ({ data, onStartOver }) => {
  return (
    <div className="container">
      <div className="squares-container">
        <Grid data={data} />
      </div>
      <button className="start-over-button" onClick={onStartOver}>
        Start Over
      </button>
    </div>
  );
};

// PropTypes for validation
SquaresScreen.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string).isRequired
  ).isRequired,
  onStartOver: PropTypes.func.isRequired, // Ensure onStartOver is a function
};

export default SquaresScreen;
