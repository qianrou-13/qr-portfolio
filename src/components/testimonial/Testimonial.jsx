import React, { useCallback, useState, useEffect } from "react";
import "./testimonial.css";
import Testi1 from "../../assets/Testimonial1.jpg";
import Testi2 from "../../assets/Testimonial2.jpg";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Testimonial = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1500
    });
    AOS.refresh();
  }, []) 

  const [isZoomed, setIsZoomed] = useState(false)
  const [isT2Zoomed, setIsT2Zoomed] = useState(false)

  const handleImgLoad = useCallback(() => {
    setIsZoomed(true)
  }, [])

  const handleImgLoad2 = useCallback(() => {
    setIsT2Zoomed(true)
  }, [])

  const handleZoomedChange = useCallback(shouldZoom => {
    setIsZoomed(shouldZoom)
  }, [])

  const handleZoomedChange2 = useCallback(shouldZoom => {
    setIsT2Zoomed(shouldZoom)
  }, [])

  return (
    <section id="testimonial">
      <div className="container">
        <h1 className="test-h1" data-aos='fade-down'>Testimonial</h1>
        <h5 data-aos='fade-down'>Click on the image to zoom in</h5>
        <div className="grid-wrapper">
          <div className="grid1">
            <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomedChange}>
              <img alt="Testimonial 1" onClick={handleImgLoad} src={Testi1} data-aos='fade-up-right'/>
            </ControlledZoom>
          </div>
          <div className="grid2">
          <ControlledZoom isZoomed={isT2Zoomed} onZoomChange={handleZoomedChange2} >
              <img alt="Testimonial 2" onClick={handleImgLoad2} src={Testi2} data-aos='fade-up-left'/>
            </ControlledZoom>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
