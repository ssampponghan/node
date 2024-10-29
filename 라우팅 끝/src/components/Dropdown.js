import React, { useState } from 'react';
import './Dropdown.css'; // 위의 CSS를 import

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className="dropdown-button">Hover me</button>
      <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
        <p>Item 1</p>
        <p>Item 2</p>
        <p>Item 3</p>
      </div>
    </div>
  );
};

export default Dropdown;
