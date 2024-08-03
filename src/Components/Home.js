import React, { useRef } from 'react'
import pdf from '../pdf/resume.pdf'
import Typed from 'typed.js'
import { useEffect } from 'react'

export default function Home() {

  const typedRef=useRef(null)
  useEffect(() => {
    const options={
      strings : ["Welcome to my profile", "My name is Divya Gupta", "I am a web developer"],
      typeSpeed:50,
      backSpeed:50,
      loop:true
    }
    const typed=new Typed(typedRef.current, options)
    return () => {
      typed.destroy()
    };
  }, []);


  return (
    <div>
    <div id='home' className="container home d-flex">
      <div className="left"
      data-aos="fade-up-right"
      data-aos-duration="1000"
      >
        <h1 ref={typedRef}>


        </h1>
        <a href={pdf} download="resume.pdf" children className='btn'>Download CV</a>
      </div>
      <div className="right"
       data-aos="fade-up-left"
      data-aos-duration="1000"
      >
        <div className="img">
        <img src="./assets/cropped_image.png" alt="Image" />
        </div>
      </div>
    </div>
    </div>
  )
} 
