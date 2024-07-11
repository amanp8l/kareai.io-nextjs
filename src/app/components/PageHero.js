import React from 'react';

export default function PageHero({ title, subtitle, content }) {
  return (
    <div className="hero-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="title">
              {title}
              <span> {subtitle}</span>
            </h1>
            <p className="mx-850 text-center">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
