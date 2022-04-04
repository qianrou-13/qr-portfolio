import React, {useEffect} from "react";
import "./contact.css";
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {ImWhatsapp} from 'react-icons/im'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1500
    });
    AOS.refresh();
  }, []) 

  return (
    <section id="contact">
      <div className="container contact-me">
        <h1 className="text-center" data-aos='zoom-in-left'>Contact Me</h1>
        <h5 className="text-center" data-aos='zoom-in-right'>Throughout these platform</h5>
        <div className="contact-info">
          <div className="info" data-aos='zoom-in'>
            <ImWhatsapp className="icon-style"/><br/>
            WhatsApp<br/>
            +353892578905
          </div>
          <div className="info" data-aos='zoom-in'>
            <RiMessengerLine className="icon-style"/><br/>
            Messenger<br/>
            UserName: Koh Qian Rou
            </div>
          <div className="info" data-aos='zoom-in'>
          <AiOutlineMail className="icon-style"/><br/>
            Email<br/>  
            qianrou.koh@gmail.com
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
