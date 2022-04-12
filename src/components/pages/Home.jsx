import React from 'react'
import Card from './Card'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import ac from '../images/ac.jpg'
import carpenter from '../images/carpenter.jpg'
import pest from '../images/pest.jpg'
import wire from '../images/wire.jpg'
import plumber from '../images/plumber.jpg'
import Cardheading from './Card_heading'

function Home(props) {
  return (
    <div>

      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} width="500" height="500" className="d-block w-100" alt="i3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} width="500" height="500" className="d-block w-100" alt="i1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} width="500" height="500" className="d-block w-100" alt="i2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div id='bordersss'>
        {/* <div className='hakunamatata'>
        <h1>Our Services</h1>
        </div> */}

        <div className="cardheading">
          <Cardheading/>
        </div>
        
        <div >
          <Card title={"Plumber"} text={"best plumbers in town"} src={plumber} name={"PLUMBER"} />
          <Card title={"Carpenter"} text={"innovative carpenters in town"} src={carpenter}  name={"CARPENTER"} />
          <Card title={"Pest Control"} text={"best organic pesticieds in town"} src={pest}  name={"PESTCONTROL"} />
          <Card title={"Electrician"} text={"best electrician in town"} src={wire} name={"ELCTRICIAN"} />
          <Card title={"A/C service"} text={"best A/C technicians in town"} src={ac} name={"ACSERVICES"} />
        </div>
      </div>


    </div>
  )
}

export default Home