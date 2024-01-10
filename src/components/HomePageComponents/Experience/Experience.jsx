import React from 'react'
import './Experience.css'
import ExperiencePic from '../../../assets/experience.jpg'
import Fade from 'react-reveal/Fade';

export default function Experience() {
  return (
    <div className='ourStory'>
      <div className="ourStory wrapper">
        <div className='wrapperImg'>
          <img src={ExperiencePic} alt="" />
        </div>
        <div className='wrapperText'>
          <Fade bottom duration={1000} distance="50%">
            <div className="sub-title">FABULOUS TASTE JOURNEY</div>
            <div className="sec-title">Experience</div>
            <div className="text br">Simple and balanced. Alexander Petillo brings together flavors and specialties from Italy and beyond to create his own culinary world, full of surprising artistry.</div>
            <div className="text">“I traveled all over the world, feeling and learning the authenticity of each local speciality food. I benefit a lot from working with other chefs and restaurants. In Japan, in Thailand, in Sweden, in Mexico, and elsewhere, chefs have different philosophies and ways of handling ingredients.”</div>
            <a href="/discover-more"><button className="bg-lateseagreen">Discover more</button></a>
          </Fade>
        </div>
      </div>
    </div>
  )
}
