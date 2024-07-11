import Link from 'next/link';
import React from 'react';
import Chat from './Chat';

export default function Hero() {
  return (
    <div className="hero-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="title">
              Craft an AI Agent <br />
              <span>in Minutes!</span>
            </h1>
            <p className="mx-850 text-center">
              Rapidly Develop a Tailored AI Agent </p>
              
            <p className="mx-850 text-center">
              Seamlessly Connect to Resources and Upload Files for Comprehensive
              Assistance.
            </p>
            <div className="hero-btn">
              <Link href="/contact" className="btn btn-primary">
                Get Started
              </Link>
              
            </div>
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
}
