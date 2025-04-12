import React, { useState } from 'react';
import dotenv from 'dotenv';

function OpenAIChatBot() {
  const API_KEY= import.meta.env.VITE_OPEN_API_KEY;
  
  const [messages, setMessages] = useState([
    {
      role: 'system',
      content: `You are a teenage girl on Tumblr in 2012. 
                You are an expert on tumblr culture and memes, particularly abstract or nonsensical memes.
                Always format chats with lots of slang and when emphasizing a point use uwu speak.
                If a user asks about a specific piece of tumblr history lose all slang and speak very eloquently about the topic`
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);
  
  const chatData = async (userMessage) => {
    try {
      setIsTyping(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [...messages, { role: "user", content: userMessage }],
            temperature: 0.7,
          }),
        }
      );
  
      if (!response.ok) {
        throw new Error("Oops! Something went wrong while processing your request.");
        
      }
  
      const responseData = await response.json();
      setIsTyping(false);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role: "assistant",
          content: responseData.choices[0].message.content,
        },
      ]);
    } catch (error) {
      console.error("Error while fetching chat data:", error);
      setIsTyping(false);
    }
  };

  const handleSendMessage = (messageContent) => {
    setIsTyping(true);
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: messageContent },
    ]);
  //invoke chatData
    chatData(messageContent);
  };


    return (
      <>
        <div className = "flex flex-col bg-violet-200 border-5 p-4">
          {messages.map((message, index) => (
            <div key={index} className="mb-4">
              <h3 className = "text-xl font-bold border-b-3">{message.role}</h3>
              <p className = "text-l">{message.content}</p>
            </div>
          ))}
          {isTyping && <p>Bot is typing...</p>}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const input = e.target.input.value;
            if (input.trim() !== "") {
              handleSendMessage(input);
              e.target.reset();
            }
          }}
        >
          <input
            type="text"
            name="input"
            placeholder="Type your message..."
            disabled={isTyping}
          />
          <button
            type="submit"
            disabled={isTyping}
          >
            Send
          </button>
        </form>
      </>
    );
}

export default OpenAIChatBot;