import React from "react";
import { useState } from "react";
import "../../base.css";
import "../../style.css";
// import Courses from "./Courses";
import DirectorNews from "./DirectorNews";
import Events from "./Events";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProgrameGallery from "./ProgrameGallery";
import Slideshow from "./Slideshow";
import Courses from "../../components/Courses";

function Homepage() {
  const [navOpened, setNavOpened] = useState(false);
  return (
    <div>
      <div id="container" className={`${navOpened ? "active move" : "active"}`}>
        <Navbar navOpened={navOpened} setNavOpened={setNavOpened} />
        <Slideshow />
        {/* <div className="importantLinks"></div> */}
        <DirectorNews />
        {/* <Courses /> */}
        <Courses />
        <section className="countdown-section">
          <div className="container">
            <div className="countdown-box">
              <h1>Mahdiyya Course</h1>
              <p>Admission is open now</p>
            </div>
            <p>
              {" "}
              Mahdiyya course is a five year course on Islamic moral studies
              designed for women and provided through selected centers which are
              giving higher secondary educations. The course is optional as
              following, two years Diplomas course, three years certificate
              course and five years degree course.
            </p>
            <a
              className="button-two"
              href="http://cpet.dhiu.in/add-student"
              target={"_blank"}
            >
              Apply Now
            </a>
          </div>
        </section>
        <ProgrameGallery />
        <Events />
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
