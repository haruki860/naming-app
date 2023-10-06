import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface Props {
  options: {
    label: string
    value: string
  }[]
  register: UseFormRegisterReturn
}

const dropDown: React.FC<Props> = ({ options, register }) => {
  return (
    <select className="border border-gray-dark w-28 text-lg" {...register}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default dropDown
