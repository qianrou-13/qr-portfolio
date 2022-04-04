import React, {useEffect} from 'react'
import './header.css'
import CV from '../../assets/QianRouKoh_Resume.pdf'
import {BsLinkedin} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'
import Typewriter from 'typewriter-effect'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Header = () => {

  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 2000
    });
    AOS.refresh();
  }, []) 

  return (
    <header>
      <div className='container' data-aos='fade-up'> 
        <h2>Hello, </h2>
        <h3>my name is</h3>
        <h1>Qian Rou Koh</h1>
        <h3>I am a</h3>
        <div className='my-role-detail'>
          <span>
            <h2 className='role-detail'>
              {/*Role details that will be display with second*/}
              <Typewriter
              options={{autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                "Fresh Graduated in Data Analytics 🎓",
                "Software Engineer 💻",
                "Web & Mobile App Developer 📱",
                "React Developer", 
              ],
              }}
              />
            </h2>
          </span>

        </div>
        <h4>Based in Ireland</h4>
        {/* Social Media section, linkedln, facebook, instagram*/}
        <div className = 'social-container'>
          <a href="https://www.linkedin.com/in/qian-rou-koh-315632170/"><BsLinkedin className='social-icon'/></a>
          <a href="https://www.facebook.com/koh.qianrou"><FaFacebookSquare className='social-icon'/></a>
          <a href="https://www.instagram.com/qian_rou/?hl=en"><RiInstagramFill className='social-icon'/></a>
        </div>
        <div className = 'btn-container'>
          <a href={CV} download className='button-52' role='button'>Download CV</a>
          <a href="#contact" class='button-52' role='button'>Let's talk</a>
        </div>
      </div>
    </header>
  )
}

export default Header