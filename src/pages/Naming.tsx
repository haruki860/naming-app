import { useForm, Controller } from 'react-hook-form'
import React from 'react'
import Dropdown from '../components/dropDown'

type FormValues = {
  language: string
  kinds: string
  export: string
}

const naming: React.FC = () => {
  const optionsLanguage = ['C', 'Java', 'Go']
  const optionsKinds = ['関数', '変数', '構造体', 'const', 'クラス']
  const optionsExport = ['有', '無']

  const [selectedValues, setSelectedValues] = React.useState<FormValues>({
    language: '',
    kinds: '',
    export: '',
  })

  const { control, handleSubmit } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }
  return (
    <>
      <h1 className="font-bold text-xl flex justify-center  pt-8 mb-10">
        作成したいクラスの条件を入力してください
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center flex-nowrap gap-x-32">
          <div className="flex">
            <h2 className="text-xl">言語</h2>
            <Controller
              name="language"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Dropdown
                  options={optionsLanguage}
                  value={selectedValues.language}
                  onChange={(selectedValue) => {
                    field.onChange(selectedValue)
                    setSelectedValues({
                      ...selectedValues,
                      language: selectedValue,
                    })
                  }}
                />
              )}
            />
          </div>
          <div className="flex">
            <h3 className="text-xl">種類</h3>
            <Controller
              name="kinds"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Dropdown
                  options={optionsKinds}
                  value={selectedValues.kinds}
                  onChange={(selectedValue) => {
                    field.onChange(selectedValue)
                    setSelectedValues({
                      ...selectedValues,
                      kinds: selectedValue,
                    })
                  }}
                />
              )}
            />
          </div>
          <div className="flex">
            <h4 className="text-xl">export</h4>
            <Controller
              name="export"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Dropdown
                  options={optionsExport}
                  value={selectedValues.export}
                  onChange={(selectedValue) => {
                    field.onChange(selectedValue)
                    setSelectedValues({
                      ...selectedValues,
                      export: selectedValue,
                    })
                  }}
                />
              )}
            />
          </div>
        </div>
      </form>
    </>
  )
}

export default naming
