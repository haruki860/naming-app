import React from 'react';
// import "./DropDown.css"

interface DropdownProps {
  options: string[];
  value: string;
  onChange: (selectedValue: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <select className="border border-gray-dark w-28 text-lg" value={value} onChange={handleChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;