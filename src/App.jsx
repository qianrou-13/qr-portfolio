import React, { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
import Topnavbar from "./components/navbar/Topnavbar";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Skill from "./components/skill/Skill";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Scrolltop from "./components/scrolltop/Scrolltop";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-page">
          <HashLoader size={80} color={"#f597f0"} loading={loading} />
          <h4>Loading...</h4>
        </div>
      ) : (
        <>
          <Topnavbar />
          <Header />
          <About />
          <Skill />
          <Resume />
          <Testimonial />
          <Contact />
          <Footer />
          <Scrolltop />
        </>
      )}
    </>
  );
};

export default App;
