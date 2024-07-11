'use client'
import Brand from './components/Brand';
import Faq from './components/Faq';
import FeatureItem from './components/FeatureItem';
import Hero from './components/Hero';
import Newsletter from './components/Newsletter';
import Solution from './components/Solution_disp';
import Models from './components/AI_Models';
import Testimonials from './components/Testimonials';
export default function Home() {
  return (
    <>
      <Hero />
      {/* <Brand /> */}
      <div className="feature-area mt-192">
        <div className="container">
          <div className="">
            <div className="col-md-12">
              <h2 className="title-2">
                Elevate Your Productivity <span>to New Heights</span>
              </h2>
            </div>
          </div>
          <div className="row gy-4">
            <FeatureItem
              img="1"
              title="Skilled Companion"
              content="Save time with automated information retrieval, eliminating the need for manual searches or team inquiries."
            />
            <FeatureItem
              img="2"
              title="Service Bot"
              content="Link integrations, sync spreadsheets, or upload documents to instantly engage
with the chatbot."
            />
            <FeatureItem
              img="3"
              title="Smart Helper"
              content="Your assistant learns from your responses and grows more intelligent, evolving into your ultimate know-it-all ."
            />
        </div>
        </div>
      </div>
      <Solution />
      <Models />

      <br />
      <br />
      <br />
      <Newsletter />
    </>
  );
}
