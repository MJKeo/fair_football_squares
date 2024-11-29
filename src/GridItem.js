import React from "react";
import PropTypes from "prop-types";

// Enum for Item Types
export const ItemType = {
  NAME: "Name",
  HAT: "Hat",
  LABEL: "Label",
};

const GridItem = ({ text, type, backgroundColor }) => {
//   const getBorderStyle = () => {
//     switch (type) {
//       case ItemType.NAME:
//         return "2px solid blue"; // Example border style for "Name"
//       case ItemType.HAT:
//         return "2px dashed red"; // Example border style for "Hat"
//       default:
//         return "1px solid black"; // Default border
//     }
//   };

  const getBackgroundColor = () => {
    switch (type) {
      case ItemType.NAME:
        return "#f0f0f0"; // Example border style for "Name"
      case ItemType.HAT:
        return "#e16c61"; // Example border style for "Hat"
      case ItemType.LABEL:
        return "";
    }
  };

  const getTextColor = () => {
    switch (type) {
      case ItemType.NAME:
      case ItemType.LABEL:
        return "black"; // Example border style for "Name"
      case ItemType.HAT:
        return "white"; // Example border style for "Hat"
    }
  };

  const getBorder = () => {
    switch (type) {
      case ItemType.NAME:
      case ItemType.HAT:
        return "1px solid black"; // Example border style for "Name"
      case ItemType.LABEL:
        return "";
    }
  };

  const getFontWeight = () => {
    switch (type) {
      case ItemType.NAME:
      case ItemType.HAT:
        return "";
      case ItemType.LABEL:
        return "bold";
    }
  };

  const getFontSize = () => {
    switch (type) {
      case ItemType.NAME:
      case ItemType.HAT:
        return "";
      case ItemType.LABEL:
        return "20px";
    }
  };

  return (
    <div
      style={{
        backgroundColor: getBackgroundColor(),
        color: getTextColor(),
        padding: "20px",
        textAlign: "center",
        border: getBorder(),
        fontWeight: getFontWeight(),
        fontSize: getFontSize(),
      }}
    >
      {text}
    </div>
  );
};

// PropTypes for validation
GridItem.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(ItemType)).isRequired,
};

export default GridItem;
