import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface TextAreaProps {
  label: string
  register: UseFormRegisterReturn
}
const TextArea: React.FC<TextAreaProps> = ({ label, register }) => {
  return (
    <>
      <div>
        <label className="block pt-8">{label}</label>
        <textarea
          {...register}
          cols={95}
          rows={2}
          className="border border-black"
        ></textarea>
      </div>
    </>
  )
}

export default TextArea
