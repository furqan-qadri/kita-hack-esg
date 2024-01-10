import React, { useState } from 'react';
import axios from 'axios';

const ChatPDF = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {
    if (!question) return;

    setLoading(true);
    setAnswer('');

    const config = {
      headers: {
        "x-api-key": "sec_8OlKpGWu1jBxAAvV3Ywp0DkAy7XptrMN",
        "Content-Type": "application/json",
      },
    };

    const data = {
      sourceId: "cha_hhyGF2AE617ykMOOe7iEX",
      messages: [
        {
          role: "user",
          content: question,
        },
      ],
    };

    try {
      const response = await axios.post("https://api.chatpdf.com/v1/chats/message", data, config);
      setAnswer('Answer: ' + response.data.content);
    } catch (error) {
      setAnswer('Error: ' + error.message);
    }

    setLoading(false);
  };

  return (
    <div>
      <label className="flex items-center border border-gray-300 rounded p-3 mt-4">
        <input
          type="text"
          placeholder="Ask any question about your generated report here"
          className="flex-1 outline-none border-none"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button
          className="bg-green-500 hover:bg-green-700 text-white rounded-full w-8 h-8 flex items-center justify-center ml-2"
          onClick={askQuestion}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 transform rotate-180">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
      </label>
      {loading ? <p>Asking...</p> : <p className='mt-3'>{answer}</p>}
    </div>
  );
};

export default ChatPDF;