import React from 'react'
import OpenAIChatBot from '../components/chatbot'

const Chatbot = () => {
  return (
    <div className="bg-bgColor flex flex-wrap rounded border-5 border-borderColor border-rounded">
      <OpenAIChatBot />
    </div>
  )
}

export default OpenAIChatBot