import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Dropdown from '../components/DropDown'
import InputText from '../components/InputText'
import TextArea from '../components/TextArea'
import { chatGptRequest } from '../components/ChatGpt'

export type FormValues = {
  language: 'C' | 'Java' | 'Go' | 'JavaScript'
  kinds: 'func' | 'variable' | 'struct' | 'const' | 'class'
  export: 'yes' | 'no'
  mintext: number
  maxtext: number
  candidates: number
  content: string
}

export const Naming: React.FC = () => {
  const [responseText, setResponseText] = useState<string[]>([])
  const optionsLanguage = [
    { label: 'C', value: 'C' },
    { label: 'Java', value: 'Java' },
    { label: 'Go', value: 'Go' },
    { label: 'JavaScript', value: 'JS' },
  ]
  const optionsKinds = [
    { label: '関数', value: 'func' },
    { label: '変数', value: 'variable' },
    { label: '構造体', value: 'struct' },
    { label: 'const', value: 'const' },
    { label: 'クラス', value: 'class' },
  ]
  const optionsExport = [
    { label: '有', value: 'yes' },
    { label: '無', value: 'no' },
  ]

  const { register, handleSubmit } = useForm<FormValues>()
  const onSubmit = async (values: FormValues) => {
    // alert(JSON.stringify(values, null, 2))
    const response = await chatGptRequest(values)
    setResponseText(response)
  }

  return (
    <>
      <h1 className="font-bold text-xl text-center pt-8 mb-10">
        作成したいクラスの条件を入力してください
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center gap-x-32">
          <div>
            <h2 className="text-xl">言語</h2>
            <Dropdown
              register={register('language')}
              options={optionsLanguage}
            />
          </div>
          <div>
            <h3 className="text-xl">種類</h3>
            <Dropdown register={register('kinds')} options={optionsKinds} />
          </div>
          <div>
            <h4 className="text-xl">export</h4>
            <Dropdown register={register('export')} options={optionsExport} />
          </div>
          <div>
            <InputText
              label={'候補数'}
              inputProps={{ type: 'number' }}
              register={register('candidates', {
                required: true,
                max: 8,
                min: 0,
              })}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="pt-4 px-16">
            <InputText
              label={'最小文字数'}
              inputProps={{ type: 'number' }}
              register={register('mintext', { min: 0 })}
            />
          </div>
          <div className="px-16 pt-4">
            <InputText
              label={'最大文字数'}
              inputProps={{ type: 'number' }}
              register={register('maxtext', { min: 15 })}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <TextArea
            label={'役割'}
            register={register('content', { required: true })}
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="rounded-full bg-gray-300 px-4 py-2 mt-8"
          >
            送信
          </button>
        </div>
        <div className="flex justify-center items-center pt-16 ">
          <div className="flex justify-center items-center w-1/3 h-60 border border-black rounded-md">
            <pre className="pb-12">{responseText}</pre>
          </div>
        </div>
      </form>
    </>
  )
}
