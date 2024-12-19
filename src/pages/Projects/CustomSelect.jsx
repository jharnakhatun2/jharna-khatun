import React, { useState } from "react";

function CustomSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("JavaScript");

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = ["JavaScript", "HTML", "CSS", "DOM", "React", "Next"];

  return (
    <div className="custom-select">
      {/* Dropdown Toggle */}
      <div className="selected-option flex justify-between" onClick={handleToggle}>
        {selectedOption}
        <span className={`arrow ${isOpen ? "open" : ""}`}>&#9660;</span>
      </div>

      {/* Options */}
      {isOpen && (
        <ul className="options">
          {options.map((option, index) => (
            <li
              key={index}
              className="option"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomSelect;
