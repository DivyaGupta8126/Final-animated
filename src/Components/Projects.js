import React from 'react'

export default function Projects() {
  return (
    <div>
      <div id='projects' className="container projects d-flex flex-column mt-5 pt-5 mb-5">
        <h1 className='fw-bold'>PROJECTS</h1>
        <div className="projectsBox d-flex mt-5">
        <div class="card"
        data-aos="flip-right"
      data-aos-duration="2000"
        >
  <img src="./assets/snake.png" class="card-img-top" alt="Snake"/>
  <div class="card-body">
    <h5 class="card-title fs-3 ">The Eater-Snake</h5>
    <p class="card-text">Eater Snake is a Vanilla JavaScript game where you guide a snake to eat food and grow longer.



</p>
    <div className="project-buttons">
    <a href="https://github.com/DivyaGupta8126/Eater-Snake" target='_blank' class="btn btn-dark me-2">Github</a>
    <a href="#" className="btn btn-outline-dark">Live Demo</a>
  </div>
  </div>
</div>
<div id='port' class="card"
data-aos="flip-right"
      data-aos-duration="2000"
>
  <img src="./assets/portfolio.jfif" class="card-img-top" alt="Portfolio"/>
  <div class="card-body">
    <h5 class="card-title fs-3">Portfolio Website</h5>
    <p class="card-text">It is a portfolio website that contains my personal information. It is made using React Js.</p>
    <div className="project-buttons">
    <a href="https://github.com/DivyaGupta8126/divyagupta8126.github.io" target='_blank' class="btn btn-dark me-2">Github</a>
    <a href="https://divyagupta8126.github.io/" target='_blank' className="btn btn-outline-dark">Live Demo</a>
  </div>
  </div>
</div>
<div id='mov' class="card"
data-aos="flip-right"
      data-aos-duration="2000"
>
  <img src="./assets/movie.png" class="card-img-top" alt="Movie"/>
  <div class="card-body">
    <h5 class="card-title fs-3">Movie-Hacking</h5>
    <p class="card-text">Movie-Hacking is a React website that provides movie information based on the entered name.</p>
    <div className="project-buttons">
    <a href="https://github.com/DivyaGupta8126/Movie-Hacking" target='_blank' class="btn btn-dark me-2">Github</a>
    <a href="https://divyagupta8126.github.io/Movie-Hacking/" target='_blank' className="btn btn-outline-dark">Live Demo</a>
  </div>
  </div>
</div>
</div>
      </div>
    </div>
  )
}
