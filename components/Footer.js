import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-6">
            <Link href="/">
              <h1 className="new" style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                <Image src="/img/kareai_white_logo.png" alt="logo" width={150} height={50} />
              </h1>
            </Link>
            <p>World&apos;s 1st Gen AI Agent Service Platform</p>
          </div>
          <div className="col-md-6">
            <div className="row gy-4">
              <div className="col-md-4">
                <div className="footer-item">
                  <h2>Product</h2>
                  <ul>
                    <li>
                      <Link href="/examples">Solutions</Link>
                    </li>
                    <li>
                      <Link href="/integrations">Integrations</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-item">
                  <h2>Company</h2>
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/pricing">Pricing</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-item">
                  <h2>Connect</h2>
                  <ul>
                    <li>
                      <Link href="https://www.linkedin.com/company/kare-ai-io/posts/?feedView=all">LinkedIn</Link>
                    </li>
                    <li>
                      <Link href="#">Github</Link>
                    </li>
                    <li>
                      <Link href="#">X</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <div className="row gy-2">
            <div className="col-md-6 align-self-center">
              <p>Copyright © 2024 Kare AI. All rights reserved.</p>
            </div>
            <div className="col-md-6">
              <ul>
                <li>
                  <Link href="/terms-of-service">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
