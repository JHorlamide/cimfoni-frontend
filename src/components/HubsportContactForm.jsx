import React, { useEffect } from "react";

const HubspotContactForm = () => {
  const HUBSPORT_FORM_ID = process.env.REACT_APP_HUBSPORT_FORM_ID;
  const HUBSPORT_PORTAL_ID = process.env.REACT_APP_HUBSPORT_PORTAL_ID;
  const HUBSPORT_REGION = process.env.REACT_APP_REGION;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js-eu1.hsforms.net/forms/v2.js?pre=1";
    script.type = "text/javascript";
    document.body.appendChild(script);

    const hbsptConfig = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: HUBSPORT_PORTAL_ID,
          formId: HUBSPORT_FORM_ID,
          region: HUBSPORT_REGION,
          target: "#hubspotForm",
        });
      }
    };

    script.addEventListener("load", hbsptConfig);
  }, [HUBSPORT_FORM_ID, HUBSPORT_PORTAL_ID, HUBSPORT_REGION]);

  return (
    <div>
      <div id='hubspotForm'></div>
    </div>
  );
};

export default HubspotContactForm;
