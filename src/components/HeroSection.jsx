import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim() === '') return;

    // Kullanıcı mesajını ekle (sadece bir kez)
    setMessages(prevMessages => [
      ...prevMessages,
      { sender: 'user', text: input }
    ]);
    setInput('');

    try {
      // Backend'e mesaj gönder
      const response = await fetch('https://chatwithai-lake.vercel.app/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });

      if (response.ok) {
        const data = await response.json();
        // AI yanıtını ekle
        setMessages(prevMessages => [
          ...prevMessages,
          { sender: 'ai', text: data.response }
        ]);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <section className="bg-gray-700 min-h-screen flex flex-col justify-center items-center">
      <div className="text-center max-w-2xl mb-10">
        <h1 className="text-8xl font-medium text-gray-100 mb-4">
          Discover the <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-900">Power of AI</span>
        </h1>
        <p className="text-lg text-gray-400">
          Build intelligent solutions that transform the way you interact with technology. Experience next-level AI tools that are fast, reliable, and easy to integrate.
        </p>
      </div>
      <div className="w-full max-w-3xl bg-gray-800 rounded-lg shadow-md p-6 space-y-4 mx-auto">
        {/* Output Section */}
        <div className="bg-gray-700 border border-gray-600 rounded p-4 overflow-y-auto">
        {messages.length === 0 ? (
            <p className="text-gray-400">No messages yet. Start the conversation!</p>
        ) : (
            messages.map((msg, index) => (
            <div
                key={index}
                className={`mb-2 p-2 rounded-lg ${msg.sender === 'ai' ? 'bg-gray-600 text-white' : 'bg-gray-800 text-gray-300'}`}
            >
                <p>{msg.text}</p>
            </div>
            ))
        )}
        </div>

        {/* Input Section */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 bg-gray-700 border border-gray-600 rounded-lg p-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          {/* Send Button */}
          <button
            onClick={handleSend}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default Chatbot;
