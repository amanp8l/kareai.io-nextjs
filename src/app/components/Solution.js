import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Solution() {
  return (
    <div className="solution-area mtb-192">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="title-2">
              Your All-in-One Intelligent AI <span>Assistant Solution</span>
            </h2>
          </div>
          <div className="col-md-12">

            <div className="solution-item">
              <div className="row align-items-center">
                <div className="col-md-6 pr-47">
                  <h3>Customized for Every Need</h3>
                  <p>
                    Craft dedicated assistants for teams, projects, or
                    workflows. Boost team efficiency by 90% with tailored data
                    access for each assistant.
                  </p>
                  <Link href="https://dashboard.kareai.io/login" className="btn btn-secondary">
                    Learn more
                  </Link>
                </div>
                <div className="col-md-6 pl-47 mt-30">
                  <div className="solution-item-list">
                    <div className="solution-single">
                      <Image
                        src="/img/check.svg"
                        alt="check"
                        width={24}
                        height={56}
                      />
                      <div>
                        <h4>Marketing</h4>
                        <p>Chat assistant for the marketing &amp; paid ads team.</p>
                      </div>
                    </div>
                    <div className="solution-single">
                      <Image
                        src="/img/check.svg"
                        alt="check"
                        width={24}
                        height={56}
                      />
                      <div>
                        <h4>Sales</h4>
                        <p>Chat assistant for the Sales teams.</p>
                      </div>
                    </div>
                    <div className="solution-single">
                      <Image
                        src="/img/check.svg"
                        alt="check"
                        width={24}
                        height={56}
                      />
                      <div>
                        <h4>Finance</h4>
                        <p>
                          Chat assistant for the Finance &amp; Accounting teams.
                        </p>
                      </div>
                    </div>
                    <div className="solution-single">
                      <Image
                        src="/img/check.svg"
                        alt="check"
                        width={24}
                        height={56}
                      />
                      <div>
                        <h4>Engineering</h4>
                        <p>
                          Chat assistant for the Product &amp; engineering teams.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
            <div className="solution-item Financial-Management">
              <div className="row align-items-center">
                <div className="col-md-6 pr-47">
                  <div className="solution-item-list solution-item-chat">
                    <div className="solution-chat-message">
                      <div className="solution-chat-message-item">
                        <Image
                          src="/img/user.svg"
                          alt="user"
                          width={32}
                          height={32}
                        />
                        <div className="solution-chat-message-item-content">
                          <h3>
                          User <span>9:15 AM</span>
                          </h3>
                          <p>
                            Hello team! Currently tackling year-end accounting,
                            and I have noticed a gap in our invoices from
                            MasterCard. Could someone assist me in locating
                            these missing invoices?
                          </p>
                        </div>
                      </div>
                      <div className="solution-chat-message-item">
                        <Image
                          src="/img/icon/KareAI1.svg"
                          alt="user"
                          width={32}
                          height={32}
                        />
                        <div className="solution-chat-message-item-content">
                          <h3>
                            Kare AI <span>9:15 AM</span>
                          </h3>
                          <p>Hey, I found two invoices for MasterCard</p>
                          <ol>
                            <li>Invoice #MC-2023-00100</li>
                            <li>Invoice #MC-2023-00101</li>
                          </ol>
                          <p>
                            They are located the archived section to
                            Xero.com/archived i hope this helps! let me know if
                            you need any additional info on these invoices.
                          </p>
                        </div>
                      </div>
                      
                      <div className="hero-chat-input">
                              <input type="text" placeholder="Type your message" style={{ fontSize: '1em' }} /> {/* Inline CSS for input font size */}
                              <button>
                                <Image src="/img/mail.svg" alt="mail" width={24} height={24} />
                              </button>
                          </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pl-47 mt-30">
                  <h3>Financial Management &amp; Accounting</h3>
                  <p>
                  Gain immediate access to financial data, accounting records, and tax information from various sources by simply asking your assistant. Save valuable time and eliminate hassle effortlessly.
                  </p>
                  <Link href="https://dashboard.kareai.io/login" className="btn btn-secondary">
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
            <div className="solution-item Strategic-Marketing ">
              <div className="row align-items-center">
              <div className="col-md-6 pl-47 mt-30">
                  <h3>Strategic Marketing Solutions</h3>
                  <p>
                  Drafting a newsletter to announce new products to your customers is a breeze, taking only a few seconds. Plus, feel free to request as many revisions as you&apos;d like!


                  </p>
                  <Link href="https://dashboard.kareai.io/logins" className="btn btn-secondary">
                    Learn more
                  </Link>
                </div>
                <div className="col-md-6 pr-47">
                  <div className="solution-item-list solution-item-chat">
                    <div className="solution-chat-message">
                      <div className="solution-chat-message-item">
                        <Image
                          src="/img/user.svg"
                          alt="user"
                          width={32}
                          height={32}
                        />
                        <div className="solution-chat-message-item-content">
                          <h3>
                            User <span>9:30 AM</span>
                          </h3>
                          <p>
                          Hi Kare AI! We&apos;re planning a major product launch next quarter, but I&apos;m concerned about our current marketing strategy. Could you review our marketing plan and provide some insights or recommendations? 
                          </p>
                        </div>
                      </div>
                      <div className="solution-chat-message-item">
                        <Image
                          src="/img/icon/KareAI1.svg"
                          alt="user"
                          width={32}
                          height={32}
                        />
                        <div className="solution-chat-message-item-content">
                          <h3>
                            Kare AI <span>9:30 AM</span>
                          </h3>
                          <p>Hey, I can certainly help with that! Please upload your current marketing plan document, and I&apos;ll analyze it for you. Additionally, I&apos;ll provide a detailed report with insights and actionable recommendations to optimize your strategy for the upcoming product launch.
                          </p>
                        </div>
                      </div>
                     
                      <div className="hero-chat-input">
                              <input type="text" placeholder="Type your message" style={{ fontSize: '1em' }} /> {/* Inline CSS for input font size */}
                              <button>
                                <Image src="/img/mail.svg" alt="mail" width={24} height={24} />
                              </button>
                          </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="solution-item  Empowering-Sales">
              <div className="row align-items-center">
                <div className="col-md-6 pr-47">
                  <div className="solution-item-list solution-item-chat">
                    <div className="solution-chat-message">
                      <div className="solution-chat-message-item">
                        <Image
                          src="/img/user.svg"
                          alt="user"
                          width={32}
                          height={32}
                        />
                        <div className="solution-chat-message-item-content">
                          <h3>
                            User <span>8:42 PM</span>
                          </h3>
                          <p>
                          Hello Kare AI, we&apos;re looking to boost our sales team&apos;s performance this quarter. Do you have any suggestions on tools or strategies we can implement to achieve this?
                          </p>
                        </div>
                      </div>
                      <div className="solution-chat-message-item">
                        <Image
                          src="/img/icon/KareAI1.svg"
                          alt="user"
                          width={32}
                          height={32}
                        />
                        <div className="solution-chat-message-item-content">
                          <h3>
                            Kare AI <span>8:42 PM</span>
                          </h3>
                          <p>Absolutely! I recommend exploring CRM tools like Salesforce or HubSpot to streamline your sales process. Additionally, implementing sales training programs and setting clear, achievable targets can significantly enhance performance. Would you like more detailed recommendations?
                          </p>
                        </div>
                      </div>
                      <div className="hero-chat-input">
                              <input type="text" placeholder="Type your message" style={{ fontSize: '1em' }} /> {/* Inline CSS for input font size */}
                              <button>
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
