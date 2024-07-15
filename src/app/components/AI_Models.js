'use client';
import Image from 'next/image';
import React, { useState } from 'react';

export default function Price() {
  
  const [showMore, setShowMore] = useState({
    genAI: false,
    enterpriseAI: false,
    aiAPI: false,
  });

  

  

  const toggleShowMore = (key) => {
    setShowMore((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="pricing-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="title-2">
              Our <span>AI Models</span>
            </h2>
          </div>
        </div>
        <div className="row gy-4">
          <div className="col-md-4">
            <div className="pricing-item">
              <h3>Gen AI Answer Engine</h3>
              <p className="small" style={{ fontSize: '1em' }}>
              Fine-tuned healthcare LLM
                
                  
              </p>
              <h4>
                <span>Cosmo</span>
              </h4>
              <div className="pricing-button">
                <button>Start Trial</button>
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
                  <li><br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />  
                  </li>



                  
                
              </ul>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="pricing-item">
              <h3>Enterprise Gen AI OS <Image src="/img/mostpop.svg" className='most-popular' alt="pro" width={62} height={22} padding={40}  /></h3>
              <p className="small" style={{ fontSize: '1em' }}>
                Perfect for Enterprises
              </p>
              <h4>
                <span>Coral</span>{' '}
                
              </h4>
              <div className="pricing-button">
                <button>Start Trial</button>
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
                <br />
                <br />
                  
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="pricing-item" >
              <h3>AI API Marketplace</h3>
              <p className="small" style={{ fontSize: '1em' }}>
               
              Agentic AI SaaS for Enterprises
              </p>
              <h4>
                <span>Cedar</span>
              </h4>
              <div className="pricing-button">
                <button>Start Trial</button>
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
                <li>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
