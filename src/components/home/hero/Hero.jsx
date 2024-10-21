import React, { useContext } from "react"; // Add useContext import
import Heading from "../../common/heading/Heading";
import "./Hero.css";
import ShowContext from "../../../context/ShowContext";

const Hero = () => {
  const { siteData } = useContext(ShowContext);
  console.log("data from hero", siteData);

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO ABC ACADEMY"
              title="Exploring Minds Elementry School"
            />
            <p>{siteData?.Academic?.exam_sechdule}</p>
            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button>
                VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
