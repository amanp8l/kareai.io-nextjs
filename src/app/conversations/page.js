import React from 'react';
import PageHero from '../components/PageHero';
import Newsletter from '../components/Newsletter';
import Image from 'next/image';

export default function Conversations() {
  return (
    <>
      <PageHero
        title="Example "
        subtitle="Conversations"
        content="Unlock the Potential of Data-Driven Assistants with Actual Conversations"
      />
      <div class="tags-area mt-192">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2>Tags</h2>
              <ul>
                <li>
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <a href="#">HR</a>
                </li>
                <li>
                  <a href="#">Customer Support</a>
                </li>
                <li>
                  <a href="#">Supply Chain & Logistics</a>
                </li>
                <li>
                  <a href="#">Product</a>
                </li>
                <li>
                  <a href="#">Sales</a>
                </li>
                <li>
                  <a href="#">Operations</a>
                </li>
                <li>
                  <a href="#">Engineering</a>
                </li>
                <li>
                  <a href="#">Legal</a>
                </li>
                <li>
                  <a href="#">Finance & Marketing</a>
                </li>
                <li>
                  <a href="#">Administration</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="tags-area">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2>Integrations</h2>
              <ul>
                <li>
                  <a href="#">Shopify</a>
                </li>
                <li>
                  <a href="#">Excel</a>
                </li>
                <li>
                  <a href="#">Gmail</a>
                </li>
                <li>
                  <a href="#">Zendesk</a>
                </li>
                <li>
                  <a href="#">Jira</a>
                </li>
                <li>
                  <a href="#">Coda</a>
                </li>
                <li>
                  <a href="#">Calendly</a>
                </li>
                <li>
                  <a href="#">Mailchimp</a>
                </li>
                <li>
                  <a href="#">Typeform</a>
                </li>
                <li>
                  <a href="#">Notion</a>
                </li>
                <li>
                  <a href="#">Google Docs</a>
                </li>
                <li>
                  <a href="#">Airtable</a>
                </li>
                <li>
                  <a href="#">Google Sheets</a>
                </li>
                <li>
                  <a href="#">Stripe</a>
                </li>
                <li>
                  <a href="#">Google Calendar</a>
                </li>
                <li>
                  <a href="#">Google Analytics</a>
                </li>
                <li>
                  <a href="#">Github</a>
                </li>
                <li>
                  <a href="#">Intercom</a>
                </li>
                <li>
                  <a href="#">Google Contacts</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="solution-area mb-192">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="solution-item">
                <div class="row align-items-center">
                  <div class="col-md-6 pr-47">
                    <div class="solution-item-list">
                      <div class="solution-chat-message">
                        <div class="solution-chat-message-item">
                          <Image
                            src="/img/user.svg"
                            alt="user"
                            width={32}
                            height={32}
                          />
                          <div class="solution-chat-message-item-content">
                            <h3>
                              You <span>1:11 PM</span>
                            </h3>
                            <p>
                              What is the current total inventory value for the
                              Salad serving set?
                            </p>
                          </div>
                        </div>
                        <div class="solution-chat-message-item">
                          <Image
                            src="/img/user-assistify.svg"
                            alt="user"
                            width={32}
                            height={32}
                          />
                          <div class="solution-chat-message-item-content">
                            <h3>
                              Assistify AI <span>8:42 PM</span>
                            </h3>
                            <p>
                              The current total inventory value for the Salad
                              Serving Set is $1799.10.
                            </p>
                            <p>Calculation:</p>
                            <ol>
                              <li>Price per unit: $19.99</li>
                              <li>Available units: 90</li>
                              <li>
                                Inventory value = Price per unit * Available
                                units
                              </li>
                              <li>Inventory Total = $1$1799.10</li>
                              <li>Inventory value = $19.99 * 90 = $1799.10</li>
                            </ol>
                          </div>
                        </div>
                        <div class="hero-chat-input">
                          <input type="text" placeholder="Type your message" />
                          <button>
                            <Image
                              src="/img/mail.svg"
                              alt="mail"
                              width={24}
                              height={24}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 pl-47 mt-30">
                    <div class="solution-item-list">
                      <div class="solution-single">
                        <Image
                          src="/img/check.svg"
                          alt="check"
                          width={24}
                          height={56}
                        />
                        <div>
                          <h4>Marketing</h4>
                          <p>
                            Chat assistant for the marketing & paid ads team.
                          </p>
                        </div>
                      </div>
                      <div class="solution-single">
                        <Image
                          src="/img/check.svg"
                          alt="check"
                          width={24}
                          height={56}
                        />
                        <div>
                          <h4>Sales</h4>
                          <p>
                            What was the revenue generated during the Black
                            Friday?
                          </p>
                        </div>
                      </div>
                      <div class="solution-single">
                        <Image
                          src="/img/check.svg"
                          alt="check"
                          width={24}
                          height={56}
                        />
                        <div>
                          <h4>Finance</h4>
                          <p>
                            Chat assistant for the Finance & Accounting teams.
                          </p>
                        </div>
                      </div>
                      <div class="solution-single">
                        <Image
                          src="/img/check.svg"
                          alt="check"
                          width={24}
                          height={56}
                        />
                        <div>
                          <h4>Engineering</h4>
                          <p>
                            Chat assistant for the Product & engineering teams.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
    </>
  );
}
