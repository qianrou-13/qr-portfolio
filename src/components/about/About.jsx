import React, {useEffect} from "react";
import "./about.css";
import Me from "../../assets/Me2.jpg";
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {

  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1500
    });
    AOS.refresh();
  }, []) 

  return (
    <section id="about">
      <h1 className="about-h1" data-aos='fade-down'>About Me</h1>
      <div className="container about-me">
        <div className="pic-container" data-aos='fade-right'>
          <img src={Me} alt="Hi, Its Me" />
        </div>
        <div className="about-me-content" data-aos='fade-left'>
          <div className="exp-container">
            <p><b>Status:</b><br/>
              Fully Graduated, seeking for job opportunities  
            </p>
            <p><b>Location:</b><br/>
              Currently based in Athlone, Ireland
            </p>
            <p><b>Visa:</b><br/>
              Stamp 1G
            </p>
            <p>
              <b>Language that I speak:</b><br/> 
              English, Mandarin, Cantonese, Malay   
            </p>
            <p>
              <b>Description about myself:</b><br/>
              In search for an IT Programmer/Business analyst position. I have a
              Degree in Business Computing, Honours Degree in Software
              Engineering and Master in data Analytics. I am interested in data
              analytic, database, developing user interface in mobile
              application and website. As a problem solver, I would implement my
              critical thinking skills to overcome any new technical challenges.
              I am a hard-working person, seek any opportunity to learn and
              improve my programming skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
