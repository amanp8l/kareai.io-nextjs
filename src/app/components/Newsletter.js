import Link from 'next/link';
import React from 'react';

export default function Newsletter() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="ready-section">
            <h2 className="title-2">
              Ready to <span>Begin?</span>
            </h2>
            <p>
              Embark on the journey of creating your very own AI-powered
              agent effortlessly.
            </p>
            <Link href="https://forms.gle/8NEaQmgnp82dZk1v7" className="btn btn-primary">
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
