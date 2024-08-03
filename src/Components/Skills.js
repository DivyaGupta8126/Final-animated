import React from "react";

export default function Skills() {
  return (
    <div>
      <div id="skills" className="container skills d-flex flex-column">
        <h1 className="fw-bold">SKILLS</h1>
        <div className="mainBox d-flex">
          <div
            className="first box"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <img src="./assets/c.png" alt="C" />
            <h3>C Language</h3>
          </div>
          <div
            className="second box"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <img src="./assets/java.png" alt="Java" />
            <h3>Java</h3>
          </div>
          <div
            className="third box"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <img src="./assets/html.png" alt="Html" />
            <h3>Html</h3>
          </div>

          <div
            className="fifth box"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <img src="./assets/javascript.png" alt="Javascript" />
            <h3>Javascript</h3>
          </div>
          <div
            className="fourth box"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <img src="./assets/css.png" alt="CSS" />
            <h3>CSS</h3>
          </div>
          <div
            className="sixth box"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <img src="./assets/react.png" alt="React" />
            <h3>React</h3>
          </div>
          <div
            className="seventh box"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <img src="./assets/bootstrap.jfif" alt="bootstrap" />
            <h3>Bootstrap</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
