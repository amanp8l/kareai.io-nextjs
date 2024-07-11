import React from 'react';

export default function Faq() {
  return (
    <div className="faq-area mx-850 mtb-192 mx-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="title-2">
              Frequently Asked <span>Questions</span>
            </h2>
            <div className="accordion" id="accordionInner">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Is it possible to control the data accessible to an agent?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionInner"
                >
                  <div className="accordion-body">
                    Yes, users have complete control over the data accessible to an agent. Kare AI offers robust data management features that allow you to dictate exactly what information the AI agent can access. Whether you need to restrict sensitive data or provide specific datasets for specialized tasks, our platform ensures that your data governance policies are fully supported.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Is it possible to personalize my assistant&apos;s chat page?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionInner"
                >
                  <div className="accordion-body">
                    Absolutely. Users can fully personalize their assistant&apos;s chat page by instructing how the agent will respond and retrieve information. From customizing the language style and tone to defining specific workflows and response strategies, our platform offers extensive configuration options to align the AI agent with your brand&apos;s voice and operational needs.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What&apos;s the time frame to setting up an agent?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionInner"
                >
                  <div className="accordion-body">
                    AI agents can be trained and deployed almost instantly with Kare AI. Typically, it only takes about 2 minutes to build a custom agent from scratch. Our streamlined setup process ensures that you can have a fully operational AI agent up and running in no time, allowing you to rapidly integrate it into your workflows.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    How customizable is the agent&apos;s interface and functionality?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionInner"
                >
                  <div className="accordion-body">
                    With Kare AI, the agent&apos;s interface and functionality are highly customizable. Whether you need it to integrate with existing software, adopt specific branding elements, or incorporate advanced functionalities, you have full control. Essentially, your agent operates by your rules. Tailor its appearance, capabilities, and user interactions to precisely meet your enterprise requirements.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
