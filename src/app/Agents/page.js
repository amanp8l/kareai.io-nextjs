import React from 'react';
import PageHero from '../components/PageHero';
import FeatureItem from '../components/FeatureItem';
import Brand from '../components/Brand';
import Newsletter from '../components/Newsletter';

export default function Agents() {
  return (
    <>
      <PageHero
        title="Kare AI"
        subtitle="Agents"
        content="Our AI Agents provide a wide range of support."
      />
      <div className="feature-area mt-192">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title-2">
                Meet Your <span>Agents</span>
              </h2>
            </div>
          </div>
          <div className="row gy-4">
            <FeatureItem
              img="a1"
              title="Camila Adams"
              content="Procurement Officer"
              link2="https://dashboard.kareai.io/login"
              link1="#"
            />
            <FeatureItem
              img="a2"
              title="Robert Kawasaki"
              content="Financial Analyst"
              link2="https://dashboard.kareai.io/login"
              link1="#"
            />
            <FeatureItem
              img="a3"
              title="Max Gadget"
              content="IT Specialist"
              link2="https://dashboard.kareai.io/login"
              link1="#"
            />
            <FeatureItem
              img="a4"
              title="Alisia Wise"
              content="Category Manager"
              link2="https://dashboard.kareai.io/login"
              link1="#"
            />
            <FeatureItem
              img="a5"
              title="Bob Marvelous"
              content="Legal Councel"
              link2="https://dashboard.kareai.io/login"
              link1="#"
            />
            <FeatureItem
              img="a6"
              title="Jessica Chastain"
              content="Customer Success Executive"
              link2="https://dashboard.kareai.io/login"
              link1="#"
            />
           
          </div>
        </div>
      </div>
      <div className="mtb-192">
        <Brand />
      </div>
      <Newsletter />
    </>
  );
}
