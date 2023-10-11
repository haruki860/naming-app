import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface InputAreaProps {
  label: string
  inputProps: React.ComponentProps<'input'>
  register: UseFormRegisterReturn
}

const InputText: React.FC<InputAreaProps> = ({
  label,
  inputProps,
  register,
}) => {
  return (
    <>
      <div className="inline-block">
        <label className="block text-lg">{label}</label>
        <input
          {...inputProps}
          {...register}
          className="block border border-black w-28"
        ></input>
      </div>
    </>
  )
}

export default InputText
