import React from 'react'

interface Props {
  options: string[]
  value: string
  onChange: (selectedValue: string) => void
}

const dropDown: React.FC<Props> = ({ options, value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value)
  }

  return (
    <select
      className="border border-gray-dark w-28 text-lg"
      value={value}
      onChange={handleChange}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default dropDown
