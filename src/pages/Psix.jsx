import React from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const Psix = () => {
  return (
    <div>
      <Navbar />
      <div class="v-main__wrap">
        <div class="container global-information">
          <h1>Special Treatment</h1>
          <p></p>
          <h3>1. INRODUCTION</h3>
          <p></p>
          <p>
            GlobeFi will respond to all law enforcement requests from authorized
            law enforcement officials with proof of authority. These Law
            Enforcement Request Guidelines outline how authorized law
            enforcement officials can engage and contact us to request customer
            information.
          </p>
          <p>
            To facilitate processing, we require the requests be addressed to
            the specific legal entities. In the event that law enforcement is
            not sure which entity the request needs to be addressed to, please
            outline all the legal entities identified, along with the proper
            Mutual Legal Assistance Treaty documents if cross-border law
            enforcement is involved.
          </p>
          <p></p>
          <h3>2. LAW ENFORCEMENT</h3>
          <p></p>
          <p>
            GlobeFi is pleased to voluntarily cooperate with law enforcement
            requests from all jurisdictions in accordance with our terms of use,
            our privacy policy, and applicable law.
          </p>
          <p>
            Please contact the following email address for all other law
            enforcement requests: law@globefi.com
          </p>
          <p></p>
          <h3>3. REQUIRED INFORMATION</h3>
          <p></p>
          <p>
            To aid the expedient review of information requests, international
            law enforcement officers are advised to provide the following in the
            request documents:
          </p>
          <p>1. The name of the law enforcement authority.</p>
          <p>
            2. Proof that the officer is authorized to request the information
            (proof of authority) and their current position within the law
            enforcement organization.
          </p>
          <p>
            3. Proof of identification of the officer within the law enforcement
            organization (e.g. badge number, internal ID number).
          </p>
          <p>4. An email address from a government domain.</p>
          <p>
            5. The name of the specific legal entity from which you require
            information.
          </p>
          <p>
            6. Any public addresses or transaction IDs in text format or an
            Excel file (not PDF).
          </p>
          <p>
            For avoidance of doubt, above documents and communication emails
            should be in English.
          </p>
          <p></p>
          <h3>4. EMERGENCY LAW ENFORCEMENT REQUESTS</h3>
          <p></p>
          <p>
            We require a certain amount of time to conduct an internal
            investigation to assist with law enforcement request, a process
            which usually takes 10-15 working days.
          </p>
          <p>
            For extremely urgent requests, please include URGENT REQUEST in the
            Subject Line.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Psix;
