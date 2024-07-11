import React from 'react';
import PageHero from '../components/PageHero';
import Price from '../components/Pricing';
import Faq from '../components/Faq';
import Brand from '../components/Brand';
import Newsletter from '../components/Newsletter';

export default function Pricing() {
  return (
    <>
      <PageHero
        title="Pricing"
        subtitle="Plans"
        content="Join our exclusive beta program to experience Kare AI for free."
      />
      <div className="mt-192">
        <Price />
      </div>
      <Faq />
      <div className="mb-192">
        <Brand />
      </div>
      <Newsletter />
    </>
  );
}
