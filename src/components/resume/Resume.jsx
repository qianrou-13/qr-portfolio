import React, {useEffect} from 'react'
import './resume.css'
import {MdWorkOutline} from 'react-icons/md'
import {FaSchool} from 'react-icons/fa'
import resumeData from '../resumeData'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import AOS from 'aos'
import 'aos/dist/aos.css'

const Resume = () => {
  let workIconStyle = {background: 'rgb(33, 150, 243)', color: '#fff'}
  let schoolIconStyle = {background: 'rgb(194, 33, 243)', color: '#fff'}

  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1500
    });
    AOS.refresh();
  }, []) 

  return (
    <section id='resume'>
      <div className='container' data-aos='fade-up'>
        <div className='pic-bg'>
          <h1 className='text-center' data-aos='zoom-out-up'>Resume</h1>
          <h5 className='text-center' data-aos='zoom-out-up'>Working Experience & Education</h5>
          <VerticalTimeline>
            {resumeData.map((data) => {
              let isWorkIcon = data.icon === "work";

              return(
                <VerticalTimelineElement
                  key={data.key}
                  date={data.date}
                  dateClassName="date"
                  iconStyle={isWorkIcon ? workIconStyle : schoolIconStyle}
                  icon={isWorkIcon ? <MdWorkOutline/> : <FaSchool/>}
                >
                  <h4 className="vertical-timeline-element-title">{data.title}</h4>
                  <h6 className='vertical-timeline-element-subtitle'>{data.location}</h6>
                  <p id="description">{data.description}</p>
                </VerticalTimelineElement>
              )
            })}
          </VerticalTimeline>
        </div>
      </div> 
    </section>
  )
}

export default Resume