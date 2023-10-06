import React from 'react'
import { useForm } from 'react-hook-form'
import Dropdown from '../components/dropDown'

export type FormValues = {
  language: 'C' | 'Java' | 'Go'
  kinds: 'func' | 'variable' | 'struct' | 'const' | 'class'
  export: 'yes' | 'no'
}

export const Naming: React.FC = () => {
  const optionsLanguage = [
    { label: 'C', value: 'C' },
    { label: 'Java', value: 'Java' },
    { label: 'Go', value: 'Go' },
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
  const onSubmit = (values: FormValues) => {
    alert(JSON.stringify(values, null, 2))
  }

  return (
    <>
      <h1 className="font-bold text-xl text-center pt-8 mb-10">
        作成したいクラスの条件を入力してください
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center gap-x-32">
          <div className="flex">
            <h2 className="text-xl">言語</h2>
            <Dropdown
              register={register('language')}
              options={optionsLanguage}
            />
          </div>
          <div className="flex">
            <h3 className="text-xl">種類</h3>
            <Dropdown register={register('kinds')} options={optionsKinds} />
          </div>
          <div className="flex">
            <h4 className="text-xl">export</h4>
            <Dropdown register={register('export')} options={optionsExport} />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
