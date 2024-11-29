import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NameInputScreen.css";

const NameInputScreen = ({ names2, onCreateSquares }) => {
  const [name, setName] = useState(""); // Text input value
  const [names, setNames] = useState(names2); // Array of entered names

  // Handler to add a name to the list
  const handleAddName = () => {
    if (name.trim() !== "") {
      setNames((prevNames) => [...prevNames, name.trim()]);
      setName(""); // Clear input field
    }
  };

  // Handler to remove a name from the list
  const handleRemoveName = (index) => {
    setNames((prevNames) => prevNames.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <div className="input-section">
        <input
          type="text"
          className="text-input"
          placeholder="Enter a name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="add-button" onClick={handleAddName}>
          Add Name
        </button>
      </div>
      <button
        className="create-squares-button"
        onClick={() => onCreateSquares(names)} // Pass names to the prop
      >
        Create Squares
      </button>
      <div className="names-list">
        {names.map((n, index) => (
          <div className="name-item" key={index}>
            {n}
            <span
              className="remove-button"
              onClick={() => handleRemoveName(index)}
            >
              x
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// PropTypes for validation
NameInputScreen.propTypes = {
  onCreateSquares: PropTypes.func.isRequired, // Ensure onCreateSquares is a function
};

export default NameInputScreen;
