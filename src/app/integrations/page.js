import React from 'react';
import PageHero from '../components/PageHero';
import FeatureItem from '../components/FeatureItems1';
import Brand from '../components/Brand';
import Newsletter from '../components/Newsletter';

export default function Integrations() {
  return (
    <>
      <PageHero
        title="Effortless"
        subtitle="Integrations"
        content="Easily connect tools, databases, or import files with just a few
              clicks. Kare ai seamlessly integrates with various platforms and
              file formats, ensuring a smooth experience."
      />
      <div className="feature-area mt-192">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title-2">
                Elevate Your Productivity <span>to New Heights</span>
              </h2>
            </div>
          </div>
          <div className="row gy-4">
          <FeatureItem
  img="4"
  title="Shopify"
  content="Elevate your e-commerce game by seamlessly linking your Shopify store data to your assistant. Connect customer details, orders, products, inventory, and more effortlessly."
  link1=""
  link2="/"
/>
<FeatureItem
  img="5"
  title="Google sheets"
  content="Ditch the spreadsheet but keep the data—seamlessly connect your Google Sheets to Kare AI, turning her into your ultimate productivity powerhouse!"
  link1=""
  link2="/"
/>
<FeatureItem
  img="6"
  title="Excel"
  content="Effortlessly manage your data with the Excel integration. Connect your assistant seamlessly to import, analyze, and leverage spreadsheet data in real-time."
  link1="examples"
  link2=""
/>
<FeatureItem
  img="7"
  title="Notion"
  content="Gear up for enhanced productivity as Notion collaborates with Kare AI, enabling you to effortlessly integrate your Notion databases with your assistant like never before."
  link1=""
  link2="/"
/>
<FeatureItem
  img="8"
  title="Zendesk"
  content="Upgrade customer support with the Zendesk integration, enabling your assistant to seamlessly connect and leverage data for an enhanced experience."
  link1=""
  link2="/"
/>
<FeatureItem
  img="9"
  title="Intercom"
  content="Embark on a journey of seamless communication and unparalleled efficiency by effortlessly linking your Intercom data to your chatbot assistant."
  link1=""
  link2="/"
/>
<FeatureItem
  img="10"
  title="Coda"
  content="Unleash the complete potential of your assistant with seamless integration of Coda tables. Empower yourself to effortlessly access and utilize information like never before."
  link1=""
  link2="/"
/>
<FeatureItem
  img="11"
  title="Mailchimp"
  content="Unleash email marketing power with Mailchimp in Kare AI. Effortlessly connect and leverage data, including reports, audiences, lists, and campaigns."
  link1=""
  link2="/"
/>
<FeatureItem
  img="12"
  title="Salesforce"
  content="Turn your Salesforce data into an AI-driven assistant, delivering instant insights and unparalleled productivity for managing your business operations!"
  link1=""
  link2="/"
/>
<FeatureItem
  img="13"
  title="Jira"
  content="Elevate your product management experience with the Jira integration. Connect your assistants to Jira Issues, Users, and Projects effortlessly."
  link1=""
  link2="/"
/>
<FeatureItem
  img="14"
  title="Gmail"
  content="Upgrade your workflow efficiency by effortlessly merging your Gmail data with your assistant. Experience the future of streamlined communication and productivity."
  link1="examples"
  link2=""
/>
<FeatureItem
  img="15"
  title="Google calendar"
  content="Escape the chaos as your assistant effortlessly merges your Google Calendar events. Stay on top of your busy schedule like a pro, never missing a beat!"
  link1="examples"
  link2=""
/>
<FeatureItem
  img="16"
  title="Stripe"
  content="Unleash new possibilities with the Stripe integration in Kare AI. Effortlessly connect and leverage your integration data, ensuring seamless financial transaction management."
  link1="examples"
  link2=""
/>
<FeatureItem
  img="17"
  title="Webflow"
  content="Elevate website engagement and deliver personalized experiences with the exciting Webflow integration. Your assistant help your website data for a thrilling user interaction!"
  link1=""
  link2="/"
/>
<FeatureItem
  img="18"
  title="Todoist"
  content="Achieve seamless personal productivity with Todoist and Emma in sync. Effortlessly connect and manage tasks and schedules all in one place."
  link1=""
  link2="/"
/>
<FeatureItem
  img="19"
  title="GitHub"
  content="Unleash the potential of collaboration and code-sharing. Integrate your GitHub data with Kare AI for real-time management and tracking of software development projects."
  link1=""
  link2="/"
/>
<FeatureItem
  img="20"
  title="Google analytics"
  content="Connect Google Analytics to your assistant for valuable insights, trends, and user behavior. Make data-driven decisions and enhance customer experiences."
  link1="examples"
  link2=""
/>
<FeatureItem
  img="21"
  title="Trello"
  content="Get ready to boost your productivity with Kare AI! The Trello integration ensures a seamless connection between your assistant and your go-to project management tool."
  link1=""
  link2="/"
/>
<FeatureItem
  img="22"
  title="Google forms"
  content="Transform your form submission process with the Google Forms integration, ensuring a seamless connection that enhances efficiency & streamlines data management."
  link1=""
  link2="/"
/>
<FeatureItem
  img="23"
  title="Calendly"
  content="Unlock time-saving superpowers with Calendly integration! Your assistant seamlessly connects to your calendar, ensuring you never miss an important meeting or appointment."
  link1=""
  link2="/"
/>
<FeatureItem
  img="24"
  title="Airtable"
  content="Elevate your chatbot assistant's capabilities with the seamless integration of Airtable. By connecting your data, it becomes even more intelligent, to assist you in managing projects."
  link1=""
  link2="/"
/>
<FeatureItem
  img="25"
  title="Typeform"
  content="Maximize form potential with Typeform integration. Kare AI effortlessly connects and uses form data, elevating your chatbot assistant experience!"
  link1=""
  link2="/"
/>
<FeatureItem
  img="26"
  title="Asana"
  content="Supercharge your productivity with Asana's integration into Kare AI. Your assistant now effortlessly connects your data for enhanced efficiency."
  link1=""
  link2="/"
/>
<FeatureItem
  img="27"
  title="Google contacts"
  content="Seamlessly integrate all your Google contacts data into your assistant, simplifying contact management and communication like never before."
  link1=""
  link2="/"
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
