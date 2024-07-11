import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Solution() {
  // State for each chat section
  const [messages1, setMessages1] = useState([
    {
      sender: 'You',
      message: 'Hello team! Currently tackling year-end accounting, and I have noticed a gap in our invoices from MasterCard. Could someone assist me in locating these missing invoices?',
    },
    {
      sender: 'Kare AI',
      message: 'Hey, I found two invoices for MasterCard',
    },
  ]);
  const [inputMessage1, setInputMessage1] = useState('');

  const [messages2, setMessages2] = useState([
    {
      sender: 'User',
      message: 'Hi Kare AI! We\'re planning a major product launch next quarter, but I\'m concerned about our current marketing strategy. Could you review our marketing plan and provide some insights or recommendations?',
    },
    {
      sender: 'Kare AI',
      message: 'Hey, I can certainly help with that! Please upload your current marketing plan document, and I\'ll analyze it for you.',
    },
  ]);
  const [inputMessage2, setInputMessage2] = useState('');

  const [messages3, setMessages3] = useState([
    {
      sender: 'User',
      message: 'Hello Kare AI, we\'re looking to boost our sales team\'s performance this quarter. Do you have any suggestions on tools or strategies we can implement to achieve this?',
    },
    {
      sender: 'Kare AI',
      message: 'Absolutely! I recommend exploring CRM tools like Salesforce or HubSpot to streamline your sales process.',
    },
  ]);
  const [inputMessage3, setInputMessage3] = useState('');

  // Function to handle user input change
  const handleInputChange1 = (e) => {
    setInputMessage1(e.target.value);
  };

  const handleInputChange2 = (e) => {
    setInputMessage2(e.target.value);
  };

  const handleInputChange3 = (e) => {
    setInputMessage3(e.target.value);
  };

  // Function to handle sending message
  const handleSendMessage1 = () => {
    if (inputMessage1.trim() !== '') {
      const newMessage = {
        sender: 'You',
        message: inputMessage1.trim(),
      };
      setMessages1((prevMessages) => [...prevMessages, newMessage]);
      setInputMessage1('');
    }
  };

  const handleSendMessage2 = () => {
    if (inputMessage2.trim() !== '') {
      const newMessage = {
        sender: 'User',
        message: inputMessage2.trim(),
      };
      setMessages2((prevMessages) => [...prevMessages, newMessage]);
      setInputMessage2('');
    }
  };

  const handleSendMessage3 = () => {
    if (inputMessage3.trim() !== '') {
      const newMessage = {
        sender: 'User',
        message: inputMessage3.trim(),
      };
      setMessages3((prevMessages) => [...prevMessages, newMessage]);
      setInputMessage3('');
    }
  };

  return (
    <div className="solution-area mtb-192">
      <div className="container">
        <div className="row">
          {/* Section 1 */}
          <div className="col-md-12">
            <div className="solution-item Financial-Management">
              <div className="row align-items-center">
                <div className="col-md-6 pr-47">
                  <div className="solution-item-list solution-item-chat">
                    <div className="solution-chat-message">
                      {messages1.map((msg, index) => (
                        <div className="solution-chat-message-item" key={index}>
                          <Image src={msg.sender === 'You' ? '/img/user.svg' : '/img/icon/KareAI1.svg'} alt="user" width={32} height={32} />
                          <div className="solution-chat-message-item-content">
                            <h3>{msg.sender}</h3>
                            <p>{msg.message}</p>
                          </div>
                        </div>
                      ))}
                      <div className="hero-chat-input">
                        <input type="text" placeholder="Type your message" value={inputMessage1} onChange={handleInputChange1} style={{ fontSize: '1em' }} />
                        <button onClick={handleSendMessage1}>
                          <Image src="/img/mail.svg" alt="mail" width={24} height={24} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pl-47 mt-30">
                  <h3>Financial Management & Accounting</h3>
                  <p>
                    Gain immediate access to financial data, accounting records, and tax information from various sources by simply asking your assistant. Save valuable time and eliminate hassle effortlessly.
                  </p>
                  <Link href="https://dashboard.kareai.io/login" className="btn btn-secondary">
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="col-md-12">
            <div className="solution-item Strategic-Marketing">
              <div className="row align-items-center">
                <div className="col-md-6 pl-47 mt-30">
                  <h3>Strategic Marketing Solutions</h3>
                  <p>
                    Drafting a newsletter to announce new products to your customers is a breeze, taking only a few seconds. Plus, feel free to request as many revisions as you'd like!
                  </p>
                  <Link href="https://dashboard.kareai.io/logins" className="btn btn-secondary">
                    Learn more
                  </Link>
                </div>
                <div className="col-md-6 pr-47">
                  <div className="solution-item-list solution-item-chat">
                    <div className="solution-chat-message">
                      {messages2.map((msg, index) => (
                        <div className="solution-chat-message-item" key={index}>
                          <Image src={msg.sender === 'User' ? '/img/user.svg' : '/img/icon/KareAI1.svg'} alt="user" width={32} height={32} />
                          <div className="solution-chat-message-item-content">
                            <h3>{msg.sender}</h3>
                            <p>{msg.message}</p>
                          </div>
                        </div>
                      ))}
                      <div className="hero-chat-input">
                        <input type="text" placeholder="Type your message" value={inputMessage2} onChange={handleInputChange2} style={{ fontSize: '1em' }} />
                        <button onClick={handleSendMessage2}>
                          <Image src="/img/mail.svg" alt="mail" width={24} height={24} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="col-md-12">
            <div className="solution-item Empowering-Sales">
              <div className="row align-items-center">
                <div className="col-md-6 pr-47">
                  <div className="solution-item-list solution-item-chat">
                    <div className="solution-chat-message">
                      {messages3.map((msg, index) => (
                        <div className="solution-chat-message-item" key={index}>
                          <Image src={msg.sender === 'User' ? '/img/user.svg' : '/img/icon/KareAI1.svg'} alt="user" width={32} height={32} />
                          <div className="solution-chat-message-item-content">
                            <h3>{msg.sender}</h3>
                            <p>{msg.message}</p>
                          </div>
                        </div>
                      ))}
                      <div className="hero-chat-input">
                        <input type="text" placeholder="Type your message" value={inputMessage3} onChange={handleInputChange3} style={{ fontSize: '1em' }} />
                        <button onClick={handleSendMessage3}>
                          <Image src="/img/mail.svg" alt="mail" width={24} height={24} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pl-47 mt-30">
                  <h3>Empowering Sales Teams</h3>
                  <p>
                    Unlock crucial sales data and lead insights instantly, enabling your sales team to concentrate on closing deals rather than sifting through extensive data. This approach ensures efficient and effective sales operations.
                  </p>
                  <Link href="https://dashboard.kareai.io/logins" className="btn btn-secondary">
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
