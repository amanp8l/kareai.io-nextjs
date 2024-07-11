import React, { useState } from 'react';
import Image from 'next/image';

export default function Chats({ initialChats }) {
  const [chats, setChats] = useState(initialChats);
  const [inputMessage, setInputMessage] = useState('');

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      const newChat = {
        sender: 'You',
        message: inputMessage.trim(),
      };
      setChats((prevChats) => [...prevChats, newChat]);

      setTimeout(() => {
        const followUpMessage = {
          sender: 'Kare AI',
          message: 'For further details, sign up to Kare AI.',
        };
        setChats((prevChats) => [...prevChats, followUpMessage]);
      }, 2000); // Delay for the follow-up message in milliseconds

      setInputMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-history">
        {chats.map((chat, index) => (
          <div key={index} className={`chat ${chat.sender === 'You' ? 'user' : 'kare-ai'}`}>
            <div className="avatar">
              <Image src={`/img/${chat.sender.toLowerCase()}.svg`} alt={chat.sender} width={32} height={32} />
            </div>
            <div className="message">
              <p>{chat.message}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input type="text" placeholder="Type your message..." value={inputMessage} onChange={handleInputChange} />
        <button onClick={handleSendMessage}>
          <Image src="/img/mail.svg" alt="Send" width={24} height={24} />
        </button>
      </div>
    </div>
  );
}
