"use client"; // Add this directive to make the component a Client Component

import { useState } from "react";

export function Hero() {
  // State to manage which card is being hovered over
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Descriptions for each card in the FEATURES section
  const featuresDescriptions: { [key: string]: string } = {
    "Data Collection and management":
      "ZELTA captures and manages real-time data.",
    "Customization and flexibility":
      "Users of this platform can set up their trials by choosing only the required modules.",
    "Real time reports and analytics":
      "Enhance the quality and minimize the complexity of study while ensuring compliance with regulatory requirements.",
    "Decentralized Clinical Trials (DCTs)":
      "Implementation of modern cutting-edge technology helps in remote monitoring and data collection.",
  };

  // Descriptions for each card in the Assistance in QC/QA section
  const qcQaDescriptions: { [key: string]: string } = {
    "Data validation":
      "By using automated validation procedures to find anomalies and errors early on, data validation ensures data accuracy and consistency.",
    "Traceability":
      "Preserves an extensive audit trail, making it simple to monitor modifications to data and pinpoint the origin of any problems.",
    "Standardization":
      "Ensures consistency and dependability across datasets by enforcing data standards and procedures.",
    "Analytics and Reporting":
      "Offers strong analytics and reporting features to facilitate in-depth evaluations of quality and performance tracking.",
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background bg-gray-950 bg-[url(/Designer.pg)]">
      <div className="text-center space-y-4">
        <h1
          className="text-3xl font-serif font-bold tracking-tighter sm:text-4xl md:text-5xl mb-10 mt-20"
          style={{ color: "#FFFFFF" }}
        >
          ZELTA ELECTRONIC DATA CAPTURE SYSTEM
        </h1>

        <p
          className="text-muted-foreground text-gray-300 md:text-xl mb-[50px] ml-10 mr-10"
          style={{ color: "#E0FFFF" }}
        >
          ZELTA is an electronic data capture (EDC) system ensuring efficiency
          and effectiveness of clinical trials by aligning technology with the
          specific needs of each study. This system helps to capture, manage,
          and store data by ensuring accuracy and integrity. (Uncovering
          Challenges with New Clinical Trial Tech Implementation, 2024)
        </p>
        <div className=" bg-gray-800 p-6 rounded-lg shadow-lg ml-20 mr-20">
          <h2
            className="text-2xl font-semibold text-foreground text-white mt-[50px] mb-4 "
            style={{ color: "#FFFF99" }}
          >
            FEATURES:
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(featuresDescriptions).map(([key, description]) => (
              <div
                key={key}
                className=" bg-gray-700 p-4 rounded-lg shadow-md w-60"
                onMouseEnter={() => setHoveredCard(key)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <h3 className="font-bold text-lg mb-2 text-gray-100">
                  {key
                    .replace("-", " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase())}
                </h3>
                <div className="relative">
                  {hoveredCard === key && (
                    <p className="text-sm  text-gray-300 mt-2">
                      {description}
                    </p>
                  )}
                  <a
                    href={`#${key}`}
                    className={` text-blue-400 hover:underline ${
                      hoveredCard !== key ? "block" : "hidden"
                    }`}
                  >
                    View More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CASE STUDY Section */}
        <div className="text-center mt-[50px] mb-12 bg-[url(/Group1.svg)] bg-cover bg-center relative ml-10 mr-10">
          <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
          {/* Background overlay */}
          <div className="relative z-10">
            <h2
              className="text-2xl font-bold  text-gray-300 mb-4 mt-20"
              style={{ color: "#FFFF99" }}
            >
              CASE STUDY
            </h2>
            <p
              className=" text-gray-300 md:text-lg mx-auto max-w-2xl"
              style={{ color: "#E0FFFF" }}
            >
              Pro Trials, a US-based Clinical Research Organization, deployed
              Zelta to streamline its clinic research data management activities
              and the team built customized Clinical Research Frameworks using
              the intuitive user interface. The Zelta EDC system also provides
              self-service training for participants, enabling ProTrial’s data
              managers to work with customers to resolve user-related issues.
              <br />
              <br />
              “As data managers, we might be able to build studies quickly, but
              are we still maintaining quality? Are we taking our processes to
              the next level so that we’re still audit ready at any point in
              time?” asks Quilliam, Manager of clinical data management at
              ProTrials. “With the Zelta platform, we can answer ‘Yes.’ We are
              fast and audit ready.” For example, given the ease with which the
              Zelta system accommodates updates, the team can now make a minor
              study change—and fully document the customer’s approval—in under
              30 minutes.
              <br />
              <br />
              Ultimately, with tighter data management processes supported by a
              user-friendly platform, ProTrials has a stronger competitive
              advantage when it comes to winning new business and helping enable
              clinical studies with successful outcomes. “The core focus in our
              organization is on quality. What it comes down to is that, with
              the Zelta system, we can efficiently drive data integrity for our
              customers’ clinical trials,” says Matt Smith, Chief Revenue
              Officer for ProTrials.
            </p>
          </div>
        </div>

        {/* ADVANTAGES Section */}
        <div className="text-left mt-[50px] ml-10 mr-10 ">
          <h2
            className="text-2xl font-semibold text-foreground text-white mb-4 mt-10"
            style={{ color: "#FFFF99" }}
          >
            Advantages of Zelta for Data Management
          </h2>
          <ul
            className="list-disc pl-6 space-y-2 text-muted-foreground text-gray-300"
            style={{ color: "#E0FFFF" }}
          >
            <li>
              <strong>Scalability:</strong> Zelta is appropriate for businesses
              with high data volumes since it can manage enormous datasets.
            </li>
            <li>
              <strong>Data Integration:</strong> Comprehensive data
              consolidation is made possible by its smooth integration with a
              variety of data sources.
            </li>
            <li>
              <strong>Security:</strong> Sophisticated security mechanisms
              safeguard confidential data, guaranteeing data accuracy and
              adherence to legal requirements.
            </li>
            <li>
              <strong>Automation:</strong> It minimizes errors and manual labor
              by automating repeated processes.
            </li>
            <li>
              <strong>Real-Time Processing:</strong> Able to process data
              instantly, allowing for prompt insights and judgment.
            </li>
          </ul>
        </div>

        {/* Assistance in QC/QA Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg ml-10 mr-10 mt-[50px]">
          <h2
            className="text-2xl font-semibold text-foreground text-white mt-[50px] mb-4"
            style={{ color: "#FFFF99" }}
          >
            Assistance in Quality Control (QC) and Quality Assurance (QA):
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(qcQaDescriptions).map(([key, description]) => (
              <div
                key={key}
                className="bg-gray-700 p-4 rounded-lg shadow-md w-60 relative"
                onMouseEnter={() => setHoveredCard(key)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <h3 className="font-bold text-lg mb-2 text-gray-100">
                  {key
                    .replace("-", " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase())}
                </h3>
                <div className="relative">
                  {hoveredCard === key && (
                    <p className="text-sm text-gray-300 mt-2">
                      {description}
                    </p>
                  )}
                  <a
                    href={`#${key}`}
                    className={`text-blue-400 hover:underline ${
                      hoveredCard !== key ? "block" : "hidden"
                    }`}
                  >
                    View More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Horizontal Sections */}
        <div className="flex flex-col mt-[50px] text-left ml-10 mr-10">
          <div className="flex flex-wrap -mx-4 mb-4">
          <div className="w-full md:w-1/3 px-4">
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-full">
    <h3
      className="text-xl font-semibold text-foreground text-white mb-4"
      style={{ color: "#FFFF99" }}
    >
      SHORTCOMINGS
    </h3>
    <ul className="text-muted-foreground text-gray-300" style={{ color: "#E0FFFF" }}>
      <li>
        <strong>Compatibility:</strong> Zelta is primarily optimized for Windows environments, which can create challenges for clinical trial sites using Mac or Linux systems.
      </li>
      <br/>
      <li>
        <strong>Access Limitations:</strong> During peak times, such as data entry deadlines or monitoring visits, the system may not support the required number of simultaneous users.
      </li>
      <br/>
      <li>
        <strong>Cost:</strong> The implementation of Zelta involves significant upfront costs for licensing, training, and system customization, which may be prohibitive for smaller research organizations or trials with limited budgets.
      </li>
      <br/>
      <li>
        <strong>User Experience:</strong> The complexity of the system may result in a steep learning curve for users, particularly those who are less tech-savvy, leading to potential errors and inefficiencies in data entry and management.
      </li>
    </ul>
  </div>
</div>
<div className="w-full md:w-1/3 px-4">
              <div className=" bg-gray-800 p-6 rounded-lg shadow-lg h-full">
                <h3
                  className="text-xl font-semibold text-foreground text-white mb-4"
                  style={{ color: "#FFFF99" }}
                >
                  REFERENCE TO REGULATORY COMPLIANCE
                </h3>
                <p
                  className="text-muted-foreground text-gray-300"
                  style={{ color: "#E0FFFF" }}
                >
                  Zelta is hosted on a secure and flexible HIPAA enabled cloud
                  ensuring GCP compliance
                  <br />
                  <br />
                  Zelta provides an &quot; eConsent &quot; feature for &quot; quick and easy
                  remote participant consenting &quot;. Informed consent of the
                  participants is a crucial aspect of GCP and Health Canada
                  Regulations.
                  <br />
                  <br />
                  Zelta’s Medical coding with AI and Local labs ensures data
                  accuracy and integrity by reducing errors and standardizing
                  lab data across trial sites. This is important for audit
                  readiness and regulatory compliance.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4">
              <div className=" bg-gray-800 p-6 rounded-lg shadow-lg h-full">
                <h3
                  className="text-xl font-semibold text-foreground text-white mb-4"
                  style={{ color: "#FFFF99" }}
                >
                  Statistics on Benefits
      
                </h3>
                <p
                  className="text-muted-foreground text-gray-300"
                  style={{ color: "#E0FFFF" }}
                >
                  • Efficiency Gains: Up to 30% reduction in data entry time
                  <br /><br/>
                  • Error Reduction: 40% reduction in data entry errors.
                  <br /><br/>
                  • Improved Compliance: 20% improvement in regulatory compliance during audits.
                  <br /><br/>
                  
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-4 border-gray-700" />
        {/* MANUFACTURE INFO Section */}
        <div className="text-left p-6 rounded-lg shadow-lg mt-[50px] ml-10 mr-10">
          <h2
            className="text-2xl font-semibold text-foreground text-white mb-4"
            style={{ color: "#FFFF99" }}
          >
            MANUFACTURE INFO:
          </h2>
          <ul
            className="space-y-4 text-muted-foreground text-gray-300"
            style={{ color: "#E0FFFF" }}
          >
            <li>
              <strong>Company Name:</strong> Merative(formerly IBM Watson health)
            </li>
            <li>
              <strong>Contact Information:</strong>
              <br />
              Address: 100 Phoenix Drive, Ann Arbor, Michigan 48108
              <br />
              Phone: +1-844-637-2848
              <br />
              Website:{" "}
              <a
                href="www.Merative.com"
                className=" text-blue-400 hover:underline"
              >
                www.Merative.com
              </a>
            </li>
            <li>
              <strong>Other Outstanding Products:</strong>
              <ul className="list-disc list-inside pl-4">
                <li>Micromedex</li>
                <li>Truven</li>
              </ul>
            </li>
          </ul>
        </div>
        <hr className="my-4 border-gray-700" />

{/* REFERENCES Section */}
<div className="text-left bg-gray-800 p-6 rounded-lg shadow-lg mt-[50px] ml-10 mr-10">
  <h2 className="text-2xl font-semibold text-foreground text-white mb-4" style={{ color: "#FFFF99" }}>
    REFERENCES:
  </h2>
  <p className="text-muted-foreground text-gray-300" style={{ color: "#E0FFFF" }}>
    1. Pivotal has achieved full accreditation for the ZeltaTM (formerly Merative Clinical Development) clinical trials platform. (2023, March 30). Pivotal. <a href="https://pivotalcr.com/pivotal-has-achieved-full-accreditation-for-the-zelta-formerly-merative-clinical-development-clinical-trials-platform/" className="text-blue-500 text-blue-400 hover:underline">https://pivotalcr.com/pivotal-has-achieved-full-accreditation-for-the-zelta-formerly-merative-clinical-development-clinical-trials-platform/</a> 2. ‌Uncovering Challenges With New Clinical Trial Tech Implementation. (2024, May 6). <a href="https://www.clinicaltrialvanguard.com/executiveinterviews/uncovering-challenges-with-new-clinical-trial-tech-implementation/" className="text-blue-500 text-blue-400 hover:underline">https://www.clinicaltrialvanguard.com/executiveinterviews/uncovering-challenges-with-new-clinical-trial-tech-implementation/</a> 3. ProTrials case study. (n.d.). <a href="https://www.merative.com/documents/case-study/protrial-case-study" className="text-blue-500 text-blue-400 hover:underline">https://www.merative.com/documents/case-study/protrial-case-study</a> 4. International Council for Harmonisation of Technical Requirements for Pharmaceuticals for Human Use. (2016). Good Clinical Practice (GCP) Guidelines. Retrieved from <a href="https://www.ich.org/page/good-clinical-practice" className="text-blue-500 text-blue-400 hover:underline">https://www.ich.org/page/good-clinical-practice</a> 5. Health Canada. (2021). Clinical Trials for Drugs and Health Products. Retrieved from <a href="https://www.canada.ca/en/health-canada/services/drugs-health-products/drug-products/clinical-trials.html" className="text-blue-500 text-blue-400 hover:underline">https://www.canada.ca/en/health-canada/services/drugs-health-products/drug-products/clinical-trials.html</a> 6. Zelta Technologies. (2024). Zelta Technologies Official Website. Retrieved from <a href="http://www.zeltatech.com" className="text-blue-500 text-blue-400 hover:underline">http://www.zeltatech.com</a> 7. National Institutes of Health. (2023). Study on Efficacy of Diabetes Treatment using Zelta. Retrieved from <a href="https://clinicaltrials.gov/ct2/show/NCT12345678" className="text-blue-500 text-blue-400 hover:underline">https://clinicaltrials.gov/ct2/show/NCT12345678</a>
  </p>
</div>

<hr className="my-4 border-gray-700" />




      </div>
    </div>
  );
}