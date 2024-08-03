import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

export default function Contact() {
  return (
    <>
      <div
        id="contact"
        className="container contact d-flex flex-column mt-5 pt-5"
      >
        <h1 className="fw-bold mt-5 pt-4 mb-5"> CONTACT ME</h1>
        <div
          className="contact-icon d-flex"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <a href="https://www.instagram.com/divyagupta8126/" className="items">
            <FaInstagram className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/divyagupta8126/" target="_blank" rel="noreferrer"
            className="items"
          >
            <CiLinkedin className="icons" />
          </a>
          <a href="https://github.com/DivyaGupta8126" target="_blank" rel="noreferrer" className="items">
            <FaGithub className="icons" />
          </a>
          <a
            href="mailto:divyagupta8126@gmail.com"
            target="_blank" rel="noreferrer"
            className="items"
          >
            <CgMail className="icons" />
          </a>
        </div>
        <span className="fs-4 mt-5 mb-5">
          Divya Gupta &copy; All rights reserved.
        </span>
      </div>
    </>
  );
}
