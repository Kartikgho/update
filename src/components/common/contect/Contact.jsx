import React, { useContext } from "react";
import Back from "../back/Back";
import "./contect.css";
import ShowContext from "../../../context/ShowContext";


const Contact = () => {
  const { siteData } = useContext(ShowContext);
  console.log("data from contact", siteData);

  const map =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14737.342558830005!2d88.47518721738282!3d22.56654669999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275a6e9befc09%3A0xb8faf8f39cdb78a7!2sCandor%20TechSpace%2C%20Newtown%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1727472514994!5m2!1sen!2sin";

  if (!siteData) {
    return <div>Loading...</div>;
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form data submission here
    console.log("Form submitted!");
  };

  return (
    <>
      <Back title="Contact us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe
              src={map}
              width="650"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="right row">
            <h1> Contact Us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>{siteData?.contactUs.location||"H Block(Newtown), Action Area I, Newtown, Chakpachuria, New Town, West Bengal 700135"}</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p>{siteData?.contactUs.email}</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p>{siteData?.contactUs.phoneNumber}</p>
              </div>
            </div>

            <form onSubmit={handleFormSubmit}>
              <div className="flexSB">
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
              </div>
              <input type="text" placeholder="Subject" required />
              <textarea cols="30" rows="10" placeholder="Create a message here..." required></textarea>
              <button className="primary-btn" type="submit">SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  );
};

 export default Contact;
