import React, { useEffect } from "react";

const HubspotContactForm = ({ region, portalId, formId }) => {
  useEffect(() => {
    //  const script = document.createElement("script");
    //  script.src = "https://js-eu1.hsforms.net/forms/v2.js?pre=1";
    //  document.body.appendChild(script);

    //  script.addEventListener("load", () => {
    //    if (window.hbspt) {
    //      window.hbspt.forms.create({
    //        target: { target },
    //        portalId: { portalId },
    //        formId: { formId },
    //        //  target: "#hubspotForm",
    //      });
    //    }
    //  });

    const script = document.createElement("script");
    script.src = "https://js-eu1.hsforms.net/forms/v2.js?pre=1";
    script.type = "text/javascript";
    document.body.appendChild(script);

    const hbsptConfig = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "26226203",
          formId: "f444d897-9d9d-48e3-adc1-a91caa1c5055",
          region: "eu1",
          target: "#hubspotForm",
        });
      }
    };

    script.addEventListener("load", hbsptConfig);
  }, [formId, portalId]);

  return (
    <div>
      <div id='hubspotForm'></div>
    </div>
  );
};

export default HubspotContactForm;
