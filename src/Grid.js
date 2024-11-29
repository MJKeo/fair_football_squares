import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Grid.css";
import GridItem, { ItemType } from './GridItem';

const Grid = ({ data }) => {
  // Create a 10x10 grid with 100 cells
  const topLeftCorner = <GridItem text={""} type={ItemType.LABEL} />;
  const columnLabels = Array.from({ length: 10 }, (_, colIndex) => (
    <GridItem text={colIndex} type={ItemType.LABEL} />
  ));
  var cells = data.flat().map((item, index) => (
    <GridItem text={item} type={item == "???" ? ItemType.HAT : ItemType.NAME} />
  ));
  var insertionIndex = 0
    for (var i = 0; i < 10; i++) {
        const thing = <GridItem text={i} type={ItemType.LABEL} />;
        cells.splice(insertionIndex, 0, thing);
        insertionIndex += 11;
    }

  return <div className="grid">{topLeftCorner}{columnLabels}{cells}</div>;
};

// PropTypes for validation
Grid.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.string).isRequired
    ).isRequired
  };

export default Grid;