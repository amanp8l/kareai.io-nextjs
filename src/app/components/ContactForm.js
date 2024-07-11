'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    jobTitle: '',
    emailAddress: '',
    phoneNumber: '',
    message: '',
    agreedTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Data submitted successfully');
      } else {
        alert('Error submitting data');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting data');
    }

    setFormData({
      firstName: '',
      lastName: '',
      companyName: '',
      jobTitle: '',
      emailAddress: '',
      phoneNumber: '',
      message: '',
      agreedTerms: false,
    });
  };

  return (
    <div className="contact-area mtb-192">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="title-2">
              Get <span>in Touch</span>
            </h2>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="contact-content">
              <h1 className="new" style={{ color: 'white' }}>
                <Image src="/img/kareai_white_logo.png" alt="logo" width={150} height={50} />
              </h1>
              <p>World&apos;s 1st Gen A Agent as a Service Platform</p>
              <h3>
                <FontAwesomeIcon icon={faLink} />  <a href="https://www.kareai.io/">www.kareai.io</a>
              </h3>
              <h4>
                <FontAwesomeIcon icon={faEnvelope} /> {'  '} <a href="mailto:Info@kareai.io">Info@kareai.io</a> 
              </h4>
              
              <div className="contact-brand">
                <Image src="/img/brand/1.svg" alt="brand" width={190} height={76} />
                <Image src="/img/brand/2.svg" alt="brand" width={190} height={76} />
                <Image src="/img/brand/3.svg" alt="brand" width={190} height={76} />
                <Image src="/img/brand/4.svg" alt="brand" width={190} height={76} />
                <Image src="/img/brand/5.svg" alt="brand" width={190} height={76} />
                <Image src="/img/brand/6.svg" alt="brand" width={190} height={76} />
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="contact-form">
              <h2>Quick Responses Await!</h2>
              <p>
                Connect with us! Feel free to ask any questions or share your thoughts. We&apos;ll respond promptly.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="First Name*"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Last Name*"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Company Name*"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Job Title*"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Email Address*"
                      name="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Phone Number*"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    name="agreedTerms"
                    checked={formData.agreedTerms}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    I read and accept terms and conditions, privacy policy.
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
