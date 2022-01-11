import React, { useState } from "react";
import "./DevCard.scss";
import DevImage from "./DevImage";
import html2canvas from "html2canvas";
import ContactInfo from "./ContactInfo";
import InlineEditor from "../inline-editor";
import SocialLink from "./SocialLink";

const SOCIAL_LINKS = [
  {
    name: "Linkedin",
    iconName: "fa-linkedin",
    defaultText: "Linkedin Profile URL",
  },
  {
    name: "Github",
    iconName: "fa-github",
    defaultText: "Github Profile URL",
  },
  {
    name: "Twitter",
    iconName: "fa-twitter",
    defaultText: "Twitter Profile URL",
  },
  {
    name: "Website",
    iconName: "fa-globe",
    defaultText: "Personal website URL",
  },
];

const saveAs = (uri, filename) => {
  const link = document.createElement("a");
  if (typeof link.download === "string") {
    link.href = uri;
    link.download = filename;

    //Firefox requires the link to be in the body
    document.body.appendChild(link);

    //simulate click
    link.click();

    //remove the link when done
    document.body.removeChild(link);
  } else {
    window.open(uri);
  }
};

const DevCard = () => {
  const [socialLinks, setSocialLinks] = useState(SOCIAL_LINKS);
  const handleOnDownload = () => {
    html2canvas(document.querySelector("#devCard")).then((canvas) => {
      const imgCanvas = canvas.toDataURL("image/png");
      saveAs(imgCanvas, 'short-resume.png')
    });
  }

  const handleOnRemoveItem = (index) => {
    const newSocialLinks = [...socialLinks];
    newSocialLinks.splice(index, 1);
    setSocialLinks(newSocialLinks);
  };

  return (
    <div className="dev-card-container" id="devCard">
      <div className="download-button">
        <button onClick={handleOnDownload} title="Download">
          <i className="fa fa-download" />
        </button>
      </div>
      <div className="top-section">
        <div className="left-side">
          <DevImage />
        </div>
        <div className="right-side">
          <ContactInfo />
          <div className="main-content">
            <InlineEditor
              text=""
              styles={{
                fontSize: 22,
                color: "#f1f1f1",
              }}
              defaultText="Your Name"
            />
            <InlineEditor
              text=""
              styles={{
                fontSize: 18,
                color: "#919292",
              }}
              defaultText="Your Designation"
            />
            <InlineEditor
              text=""
              styles={{
                fontSize: 14,
                color: "#8bc34a",
              }}
              textArea
              dangerouslyStyled
              defaultText="Write down your top skills"
            />
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <h4 className="heading">Professional Summary</h4>
        <InlineEditor
          text="I’m an independent application developer who is passionate about brining client’s visions to life. Since starting my journey with application development in 2015, I have developed good number of projects for a diverse client base, which includes MNC's, startups. <br /><br />
          I’m proud that my work has helped my clients to grow their businesses, generate more revenue and with cost effective development.
          My strongest skill is Problem Solving. Being able to gather client’s requirements and translate those into an engaging, effective and unique applications is what has helped me obtain good knowledge on the technologies that I worked.
          If you would like to know more about my application development services, please take a look at my website."
          styles={{
            fontSize: 16,
            color: "#86bbd3",
            lineHeight: 1.5,
            minHeight: 200,
          }}
          textArea
          dangerouslyStyled
          defaultText="Write down breif about yourself"
        />
        <h4 className="heading">Social Presence</h4>
        <div className="footer-section">
          {socialLinks &&
            socialLinks.map((sl, index) => {
              return (
                <SocialLink
                  data={sl}
                  itemIndex={index}
                  onRemoveItem={handleOnRemoveItem}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default DevCard;
