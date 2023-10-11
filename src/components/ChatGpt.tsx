import { OpenAI } from 'openai'
import { FormValues } from '../pages/Naming'

const apiKey = import.meta.env.VITE_OPENAI_API_KEY
const openai = new OpenAI({
  apiKey,
  dangerouslyAllowBrowser: true,
})

export const chatGptRequest = async (values: FormValues) => {
  const response = await openai.completions.create({
    model: 'gpt-3.5-turbo-instruct',
    prompt: `${values.content}ために使用するクラス名や関数名を生成したいです。条件は以下の通りです。- 言語:${values.language}- 種類:${values.kinds} - exportの有無:${values.export}- アルファベットの文字数:${values.mintext}以上${values.maxtext}文字以下 - 候補の数:${values.candidates}\nこれらの条件でクラスまたは関数の名前だけを提案してください。`,
    max_tokens: 50,
  })

  const result: string[] = response.choices.map((choice) => choice.text)
  console.log(result)
  return result
}
