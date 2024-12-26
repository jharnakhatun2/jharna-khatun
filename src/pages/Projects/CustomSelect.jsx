import { useState } from "react";

function CustomSelect({ handleCategorySort }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    handleCategorySort(option);
  };

  const options = ["", "JavaScript", "HTML", "CSS", "DOM", "React", "Next"];

  return (
    <div className="custom-select">
      <div
        className="selected-option flex justify-between"
        onClick={handleToggle}
      >
        {selectedOption || "Select Category"}
        <span className={`arrow ${isOpen ? "open" : ""}`}>&#9660;</span>
      </div>
      {isOpen && (
        <ul className="options">
          {options.map((option, index) => (
            <li
              key={index}
              className="option"
              onClick={() => handleOptionClick(option)}
            >
              {option || "Select Category"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomSelect;
