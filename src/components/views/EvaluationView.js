import React from 'react'
import { render } from "react-dom";
import ReactStars from "react-rating-stars-component";

import { Navbar, NavbarBrand, Button } from 'reactstrap'

let problem_statement = "This is the problem statement";
let problem_solution = "The Voyager program is an American scientific program that employs two robotic interstellar probes, Voyager 1 and Voyager 2. They were launched in 1977 to take advantage of a favorable alignment of Jupiter and Saturn, to fly near them while collecting data for transmission back to Earth. After launch the decision was taken to send Voyager 2 near Uranus and Neptune to collect data for transmission back to Earth.";
export const EvaluationView = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <>
      <Navbar
        className="my-2 fs-4"
        style={{ "background-color": "#281E5D" }}
      >
        <NavbarBrand href="/" style={{ "color": "tomato" }} className="font-monospace">
          Incedo Hack-a-thon
        </NavbarBrand>
        <Button
    
          style={{"background-color":"tomato"}}
        >
          Log Out
        </Button>
      </Navbar>
      <div style={{ "width": "60%", "margin-top": "5%" }} className="mx-auto ">
        Problem Statement
        <div style={{ "height": "20%", "border-color": "#281E5D" }} className="border border-3 ">
          <span style={{ "padding": "10%", "margin": "5%" }}>{problem_statement}</span>
        </div>

        <div style={{ "height": "40%", "margin-top": "5%", "border-color": "#281E5D" }} className="border border-3">
         <p>Problem Solution</p>
          <br/>
          <span style={{ "padding": "5%", "margin": "5%" }}>
            {problem_solution}
          </span>
        </div>

        <video style={{ "width": "100%", "height": "45%", "margin-top": "5%" }} controls>
          Your browser does not support the video tag.
        </video>
        <div className=' text-center border border-3 dark' style={{"margin-top":"5%"}} >
          <h3 className='font-monospace'>Ratings</h3>
        <div className='row '>
          <div className='col'>
            Code Quality
          </div>
          <div className='col'>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700">

            </ReactStars>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            Parameter 2
          </div>
          <div className='col'>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700">
            </ReactStars>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            Parameter 3
          </div>
          <div className='col'>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700">
            </ReactStars>
          </div>
        </div>
        
        <div className='row'>
          <div className='col'>
            Parameter 4
          </div>
          <div className='col'>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700">
            </ReactStars>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            Parameter 5
          </div>
          <div className='col'>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700">
            </ReactStars>
          </div>
        </div>
        </div>
        </div>
        <div className='text-center' style={{"margin-top":"5%"}}>
        <Button
          color="success"
        >
          Submit
        </Button>
        </div>        
    </>
  )
}
