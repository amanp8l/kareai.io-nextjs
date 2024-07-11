'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export default function Price() {
  const [planType, setPlanType] = useState('monthly');

  const togglePricing = (type, button) => {
    if (button && button.classList) {
      const buttons = document.querySelectorAll('.pricing-tab button');
      buttons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      setPlanType(type);
    }
  };

  useEffect(() => {
    const pricingItems = document.querySelectorAll('.pricing-item');

    pricingItems.forEach((item) => {
      const monthlyPrice = item.getAttribute('data-monthly-price');
      const yearlyPrice = item.getAttribute('data-yearly-price');
      const spanElement = item.querySelector('h4 span');
      const subElement = item.querySelector('h4 sub');

      if (spanElement && subElement) {
        if (planType === 'monthly') {
          spanElement.textContent = monthlyPrice;
          subElement.textContent = '/m';
        } else if (planType === 'yearly') {
          spanElement.textContent = yearlyPrice;
          subElement.textContent = '/m';
        }
      }
    });
  }, [planType]);

  return (
    <div className="pricing-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="title-2">
              Select a <span>Pricing Plan</span>
            </h2>
            <div className="pricing-tab">
              <button
                className="active"
                onClick={(e) => togglePricing('monthly', e.target)}
              >
                Monthly
              </button>
              <button
                onClick={(e) => togglePricing('yearly', e.target)}
              >
                Yearly
              </button>
            </div>  
          </div>
        </div>
        <div className="row gy-4">
          <div className="col-md-4">
            <div className="pricing-item"
              data-monthly-price="$15"
              data-yearly-price="$12"
            >
              <h3>Cosmo</h3>
              <p>Gen AI Answer Engine.</p>
              <h4>
                <span>$15</span>
                <sub>/m</sub>
              </h4>
              <p>Pause or cancel anytime</p>
              <div className="pricing-button">
                <button>Start Free Trial</button>
                <button>Subscribe</button>
              </div>
              <ul>
                <li>
                  <Image src="/img/check.svg" alt="check" width={24} height={24} />
                  Multi-modal AI processing (text, image, pdf, excel)
                </li>
                <li>
                  <Image src="/img/check.svg" alt="check" width={24} height={24} />
                  Specialized for healthcare use cases
                </li>
                <li>
                  <Image src="/img/check.svg" alt="check" width={24} height={24} />
                  Large subscriber base
                </li>
                <li>
                  <Image src="/img/check.svg" alt="check" width={24} height={24} />
                  High adoption rate among doctors (35%)

                </li>
                <li>
                  <Image src="/img/check.svg" alt="check" width={24} height={24} />
                  Scalable architecture</li>
                 


                  
                
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="pricing-item"
              data-monthly-price="~~"
              data-yearly-price="$269"
            >
              <h3>
              Coral{' '}
                <Image
                  src="/img/mostpop.svg"
                  alt="pro"
                  width={92}
                  height={26}
                />
              </h3>
              <p>Agentic AI SaaS for Enterprises</p>
             
                
               
              <div className="pricing-button">
                <button>Contact Us</button>
                
              </div>
              <ul>
                <li>
                  <Image src="/img/check.svg" alt="check" width={24} height={24} />
                  200+ pre-built agents serving unlimited use cases
                </li>
                <li>
                  <Image src="/img/check.svg" alt="check" width={24} height={24} />
                  No-code development of Gen AI agents
                </li>
                <li>
                  <Image src="/img/check.svg" alt="check" width={24} height={24} />
                  Compatible to 20+ LLMs 

                </li>
                <li>
                  <Image src="/img/check.svg" alt="check" width={24} height={24} />
                  Private cloud or on-prem hosting for enhanced control
                </li>
                <li>
                  <Image src="/img/check.svg" alt="check" width={24} height={24} />
                  Optimized for security and compliance

                </li>
                <li> <Image src="/img/check.svg" alt="check" width={24} height={24} />  
                      Adopted by leading enterprises across 5 countries
                      </li>

                <li>
                  <Image src="/img/check.svg" alt="check" width={24} height={24} />
                  Suitable for all industry applications
                  
                </li>
                
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="pricing-item"
              data-monthly-price="~~"
              data-yearly-price="$699"
            >
              <h3>Cedar
              {' '}
                <Image
                  src="/img/pro-btn.svg"
                  alt="pro"
                  width={92}
                  height={26}
                />
              </h3>
              <p>Gen AI Marketplace for Developers</p>
              
              <div className="pricing-button">
                
                <button>Coming Soon</button>
              </div>
              <ul>
                <li>
                  <Image src="/img/check.svg" alt="check" width={24} height={24} />
                  Gen AI integration to any workflow
                </li>
                <li>
                  <Image src="/img/check.svg" alt="check" width={24} height={24} />
                  Enables Gen-AI native application development

                </li>
                <li>
                  <Image src="/img/check.svg" alt="check" width={24} height={24} />
                  Serves 100+ use cases
                </li>
                <li>
                  <Image src="/img/check.svg" alt="check" width={24} height={24} />
                  Adaptable to all cloud servers or can be deployed locally
                </li>
                
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
