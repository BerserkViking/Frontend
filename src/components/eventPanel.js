import React from 'react'
import {CardColumns,Card,CardImg,CardSubtitle,CardText,Button,CardBody
,CardTitle,Col} from 'reactstrap'
import  logone from './Images/intel_hackathon.png'

export const EventPanel = () => {
  return (
   <>
   <CardColumns
  style={{
    width: '18rem',
    "overflow-y":"scroll",
    "height":"90vh" 
  }}
  className="ms-auto"
> 
  <div className='row' style={{"width":"7rem"}}>
  <div className='col-3'>
    <CardImg
      alt="Card image cap"
      src={logone}
      top
      width="25%"
    />
    </div>
    <div className='col-9'>
    <CardBody>
      <CardTitle tag="h5">
        Intel Hackathon
      </CardTitle>
    </CardBody>
    </div>
     <span style={{"margin-left":"20%"} } > General Description </span>
    </div>
  <div className='row'>
  <div className='col-3'>
    <CardImg
      alt="Card image cap"
      src={logone}
      top
      width="25%"
    />
    </div>
    <div className='col-9'>
    <CardBody>
      <CardTitle tag="h5">
        Intel Hackathon
      </CardTitle>
    </CardBody>
    </div>
    </div>
  <div className='row'>
  <div className='col-3'>
    <CardImg
      alt="Card image cap"
      src={logone}
      top
      width="25%"
    />
    </div>
    <div className='col-9'>
    <CardBody>
      <CardTitle tag="h5">
        Intel Hackathon
      </CardTitle>
    </CardBody>
    </div>
    </div>
  <div className='row'>
  <div className='col-3'>
    <CardImg
      alt="Card image cap"
      src={logone}
      top
      width="25%"
    />
    </div>
    <div className='col-9'>
    <CardBody>
      <CardTitle tag="h5">
        Intel Hackathon
      </CardTitle>
    </CardBody>
    </div>
    </div>
  <div className='row'>
  <div className='col-3'>
    <CardImg
      alt="Card image cap"
      src={logone}
      top
      width="25%"
    />
    </div>
    <div className='col-9'>
    <CardBody>
      <CardTitle tag="h5">
        Intel Hackathon
      </CardTitle>
    </CardBody>
    </div>
   
    </div>

    
</CardColumns>
   </>
  )
}
