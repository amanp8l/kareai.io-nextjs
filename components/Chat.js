'use client';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

const initialMessages = [
  {
    sender: 'You',
    message: 'What was the revenue generated during the Black Friday Sale 2022 campaign?',
  },
  {
    sender: 'Kare AI',
    message: 'The revenue generated during the Black Friday Sale 2022 campaign was $20,000.',
  },
  {
    sender: 'You',
    message: 'What was the open rate for the Black Friday Sale 2022 campaign?',
  },
  {
    sender: 'Kare AI',
    message: 'The open rate for the Black Friday Sale 2022 campaign was 25%.',
  },
];

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const chatListRef = useRef(null);

  useEffect(() => {
    let intervalId;
    if (messages.length < initialMessages.length) {
      intervalId = setInterval(() => {
        setMessages((prevMessages) => [...prevMessages, initialMessages[prevMessages.length]]);
      }, 2000); // Delay between messages in milliseconds
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [messages]);

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      const newMessage = {
        sender: 'You',
        message: inputMessage.trim(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);

      setTimeout(() => {
        const followUpMessage = {
          sender: 'Kare AI',
          message: 'To continue this conversation, sign up to Kare AI.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prevMessages) => [...prevMessages, followUpMessage]);
      }, 4000); // Delay for the follow-up message in milliseconds

      setInputMessage('');
    }
  };

  return (
    <div className="hero-chat mx-850">
      <div className="hero-chat-list" ref={chatListRef} style={{ height: 'auto' }}>
        {messages.map((msg, index) => (
          <div className="hero-chat-item" key={index}>
            <Image src={msg.sender === 'You' ? '/img/user.svg' : '/img/icon/KareAI1.svg'} alt="user" width={32} height={32} />
            <div className="hero-chat-item-content">
              <h3>
                {msg.sender} <span>{msg.time}</span>
              </h3>
              <p>{msg.message}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="hero-chat-input">
        <input type="text" placeholder="Type your message" value={inputMessage} onChange={handleInputChange} />
        <button onClick={handleSendMessage}>
          <Image src="/img/mail.svg" alt="mail" width={24} height={24} />
        </button>
      </div>
    </div>
  );
}
