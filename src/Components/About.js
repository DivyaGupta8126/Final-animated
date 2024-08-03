import React from "react";

export default function About() {
  return (
    <>
      <div id="about" className="container about d-flex flex-column">
        <h1 className="fw-bold mb-4" id="ab">
          ABOUT ME
        </h1>
        <div
          className="first d-flex flex-column"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <h1 className="ph">Education</h1>
          <ul>
            <li>Bachelor's in Computer Science Engineering (DIT, Dehradun)</li>
            <li>Intermediate (SHPS, Haridwar)</li>
            <li>Matriculation (SHPS, Haridwar)</li>
          </ul>
        </div>

        <div
          className="third d-flex flex-column"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <h1 className="ph">Hobbies</h1>
          <ul>
            <li>Travelling to new places and exploring new food and dishes</li>
            <li>Shopping</li>
            <li>Listening to Music</li>
          </ul>
        </div>

        <div
          id="about"
          className="second d-flex flex-column"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <h1 className="ph">Certifications</h1>
          <ul>
            <li>Basic Problem Solving Certification (Hackerrank)</li>
            <li>Basic Java Certification (Hackerrank) </li>
            <li>Certificate for being a CBE in Classroom Study Programme</li>
          </ul>
        </div>
      </div>
    </>
  );
}
