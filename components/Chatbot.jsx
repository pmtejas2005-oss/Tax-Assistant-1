import React, { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hello! I'm your AI Tax Assistant. How can I help you with your taxes today?", 
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Sample responses for demonstration
  const sampleResponses = {
  'deduction': "You may qualify for deductions like Section 80C, 80D, HRA, and education loan interest.",
  'retirement': "You can reduce taxes by investing in retirement schemes like NPS or EPF.",
  'deadline': "The tax filing deadline is July 31 for most individuals in India.",
  'refund': "You can check your refund status on the Income Tax e-filing portal.",
  'salary': "Salary income is taxed under the head 'Income from Salary'. Standard deduction is ₹50,000.",
  'investment': "Investments in ELSS, PPF, LIC, and NPS qualify for deduction under Section 80C.",
  'gst': "GST is a consumption tax applied to goods and services in India.",
  'capital gain': "Capital gains arise from sale of assets like property, stocks, or mutual funds.",
  'itr': "ITR stands for Income Tax Return. It is used to report your income and tax liability.",
  'help': "You can ask about deductions, GST, ITR filing, investments, and tax savings."
};

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const newMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, newMessage]);
    setInput('');
    setLoading(true);

    // Simulate API call to backend
    // Simulate API call
await new Promise(resolve => setTimeout(resolve, 1500));

let responseText = "I'm not sure about that.";

const lowerInput = input.toLowerCase();

if (lowerInput.includes("deduction") || lowerInput.includes("80c")) {
  responseText = sampleResponses["deduction"];
}
else if (lowerInput.includes("itr") || lowerInput.includes("return")) {
  responseText = sampleResponses["itr"];
}
else if (lowerInput.includes("investment") || lowerInput.includes("tax saving")) {
  responseText = sampleResponses["investment"];
}
else if (lowerInput.includes("gst")) {
  responseText = sampleResponses["gst"];
}
else if (lowerInput.includes("refund")) {
  responseText = sampleResponses["refund"];
}

    const botResponse = {
      id: messages.length + 2,
      text: responseText,
      sender: 'bot',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botResponse]);
    setLoading(false);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="max-w-3xl mx-auto h-full flex flex-col">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Tax Assistant</h1>
      
      <div className="flex-1 bg-white shadow rounded-lg flex flex-col h-[calc(100vh-12rem)]">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Ask me anything about your taxes</h2>
          <p className="mt-1 text-sm text-gray-500">
            I can explain tax concepts, provide personalized advice, or help with calculations
          </p>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-xs md:max-w-md rounded-lg px-4 py-2 ${
                  message.sender === 'user' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-white border border-gray-200 text-gray-800'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <span className={`text-xs mt-1 block ${
                  message.sender === 'user' ? 'text-indigo-200' : 'text-gray-500'
                }`}>
                  {formatTime(message.timestamp)}
                </span>
              </div>
            </div>
          ))}
          
          {loading && (
            <div className="flex justify-start mb-4">
              <div className="max-w-xs md:max-w-md rounded-lg px-4 py-2 bg-white border border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        <div className="px-4 py-4 border-t border-gray-200 bg-white rounded-b-lg">
          <form onSubmit={handleSendMessage} className="flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
              className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-md sm:text-sm border-gray-300"
              placeholder="Ask about tax deductions, retirement accounts, or filing status..."
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="ml-3 inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send
            </button>
          </form>
          <div className="mt-2 text-xs text-gray-500">
            <p>Try asking: "What deductions am I eligible for?" or "How can I reduce my tax liability?"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;