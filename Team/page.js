import React from 'react';
import PageHero from '../components/PageHero';
import FeatureItem from '../components/FeatureItems2';
import Brand from '../components/Brand';
import Newsletter from '../components/Newsletter';

export default function Team() {
  return (
    <>
      <PageHero
        title="About"
        subtitle="Us"
        content="We have built a top team and cultivated partnerships with the best Domain Experts in the industry to Develop our Platform."
      />
      <div className="feature-area mt-192">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title-2">
                Meet the <span>Managing Team</span>
              </h2>
            </div>
          </div>
          <div className="row gy-4">
            <FeatureItem
              img="k1"
              title="Koustav Chatterjee"
              content="Founder and CEO"
              link2="https://dashboard.kareai.io/login"
              link1=""
            />
            <FeatureItem
              img="k2"
              title="Aman Dutta"
              content="GMT & Growth consultant"
              link2="https://dashboard.kareai.io/login"
              link1=""
            />
            <FeatureItem
              img="k7"
              title="Nachiket Pathki"
              content="Investor and Founding Team Member"
              link2="https://dashboard.kareai.io/login"
              link1="" 
            />
            <FeatureItem
              img="k3"
              title="Sourav Kumar"
              content="Investor & Founding team member, Partner IBM Watson Health USA"
              link2="https://dashboard.kareai.io/login"
              link1=""
            />
            <FeatureItem
              img="k4"
              title="Dr.Priyanka Mathur,MD"
              content="Investor and Strategic partner, CEO-Medipocket USA"
              link2="https://dashboard.kareai.io/login"
              link1=""
            />
            <FeatureItem
              img="k5"
              title="Dr.Rahul Garg, MD"
              content="Investor and Thought Leader"
              link2="https://dashboard.kareai.io/login"
              link1=""
            />
            
            <FeatureItem
              img="k8"
              title="Dr.Imroz Sachdev, MD"
              content="Investor and Scientific Advisor, Surgeon NHS UK"
              link2="https://dashboard.kareai.io/login"
              link1=""
            />
            <FeatureItem
              img="k6"
              title="Steve Roberts"
              content="Leader-Catalyst, Ex. CIO of Elevance Health, Vice Chairman of the board-Kare AI"
              link2="https://dashboard.kareai.io/login"
              link1=""
              
            />
           <FeatureItem
              img="k9"
              title="Jeff Newman"
              content="Investor and Thought Leader"
              link2="https://dashboard.kareai.io/login"
              link1=""
            />
          </div>
        </div>
        
      </div>
      <div className="feature-area mt-192">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title-2">
                Meet our <span>Board of Advisors</span>
              </h2>
            </div>
          </div>
          <div className="row gy-4">
            <br />
            <FeatureItem
              img="l1"
              title="Adam Boal"
              content=""
              link2="https://dashboard.kareai.io/login"
              link1=""
            />
            <FeatureItem
              img="l2"
              title="Blake Scott"
              content=""
              link2="https://dashboard.kareai.io/login"
              link1=""
            />
            <FeatureItem
              img="l3"
              title="Jeff Miller"
              content=""
              link2="https://dashboard.kareai.io/login"
              link1="" 
            />
            <FeatureItem
              img="l4"
              title="David Auffert"
              content=""
              link2="https://dashboard.kareai.io/login"
              link1=""
            />
            <FeatureItem
              img="l5"
              title="Dr.Priyanka Mathur,MD"
              content=""
              link2="https://dashboard.kareai.io/login"
              link1=""
            />
            <FeatureItem
              img="l6"
              title="Sri B"
              content=""
              link2="https://dashboard.kareai.io/login"
              link1=""
            />
            
            <FeatureItem
              img="l7"
              title="Susan Patrick Harris"
              content=""
              link2="https://dashboard.kareai.io/login"
              link1=""
            />
            <FeatureItem
              img="l8"
              title="Piyush Singh"
              content=""
              link2="https://dashboard.kareai.io/login"
              link1=""
              
            />
           <FeatureItem
              img="l9"
              title="Ray Mazzoleni"
              content=""
              link2="https://dashboard.kareai.io/login"
              link1=""
            />
             <FeatureItem
              img="l10"
              title="Mike Dubbs"
              content=""
              link2="https://dashboard.kareai.io/login"
              link1=""
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
