import React, { useState } from 'react'
import Dropdown from '../components/pulldown/DropDown'
const naming: React.FC = () => {
  const optionsLanguage = ['C', 'Java', 'Go']
  const optionsKinds = ['関数', '変数', '構造体', 'const', 'クラス']
  const optionsExport = ['有', '無']
  const [selectedValue, setSelectedValue] = useState<string>('')

  const handleDropdownChange = (selectedValue: string) => {
    setSelectedValue(selectedValue)
  }

  return (
    <>
      <h1 className="font-bold text-xl flex justify-center pt-8 mb-10">
        作成したいクラスの条件を入力してください
      </h1>
      <div className="flex justify-center gap-x-32">
        <div>
          <h2 className="text-xl">言語</h2>
          <Dropdown
            options={optionsLanguage}
            value={selectedValue}
            onChange={handleDropdownChange}
          />
        </div>
        <div>
          <h3 className="text-xl">種類</h3>
          <Dropdown
            options={optionsKinds}
            value={selectedValue}
            onChange={handleDropdownChange}
          />
        </div>
        <div>
          <h4 className="text-xl">export</h4>
          <Dropdown
            options={optionsExport}
            value={selectedValue}
            onChange={handleDropdownChange}
          />
        </div>
      </div>
    </>
  )
}

export default naming
