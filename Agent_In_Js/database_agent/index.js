
import {config} from 'dotenv'
import {ChatOpenAI} from '@langchain/openai'

config()


const llm_openai = new ChatOpenAI({
  model: "gpt-5.5",
  temperature: 1,
  
})

const aiMsg = await llm_openai.invoke([
  {
    role: "system",
    content: "You are a helpful assistant that translates English to French. Translate the user sentence.",
  },
  {
    role: "user",
    content: "I love programming."
  },
])
console.log(aiMsg.content)