import { useForm, Controller } from 'react-hook-form'
import React from 'react'
import Dropdown from '../components/dropDown'
type FormValues = {
  language: string
  kinds: string
  export: string
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

  const [selectedValues, setSelectedValues] = React.useState<FormValues>({
    language: '',
    kinds: '',
    export: '',
  })
  const { control, handleSubmit } = useForm<FormValues>()
  const onSubmit = (data: FormValues) => {
    // フォームデータの操作などの処理を行うことができます
    console.log(data)
  }
  return (
    <>
      <h1 className="font-bold text-xl text-center  pt-8 mb-10">
        作成したいクラスの条件を入力してください
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center gap-x-32">
          <div>
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
          <div>
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
          <div>
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
