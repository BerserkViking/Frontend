import React from 'react'
import logone from './Images/aiml_logo.webp'
export const DomainCard = () => {
  return (
    <>
    <div className='row container border border-3 border-dark' >
     <div className="col-xl-6 col-lg-6 col-md-6" >
     <img src={logone} className="img-fluid"/> 
     </div>
    <div className='col-xl-6 col-lg-6 col-md-6 '> 
    <h6 className='font-monospace ms-auto'>Artificial Intelligence and Machine Learning</h6>
   <p>Artificial intelligence is intelligence—perceiving, synthesizing, 
       and inferring information—demonstrated by machines, as opposed to
        intelligence displayed by non-human animals and humans</p> 
    </div>
    </div>
        {/* <div className='col'>
        <div className='row'>
      <Card className="col-6 mx-auto">
        <CardBody>
          <CardTitle>
            Overview
          </CardTitle>
          <CardText>
            A hackathon, also known as a codefest, is a social coding event that brings computer programmers and other interested
            people together to improve upon or build a new software program. The word hackathon is a portmanteau of the words hac
            ker, which means clever programmer, and marathon, an event marked by endurance.The concept of the hackathon, also call
          </CardText>
        </CardBody> 
      </Card> 
      </div> */}
  
      {/* <div className='col-6 mx-auto'>
      <div className='row container border border-3 border-dark' style={{"borderColor":"281E5D"}} >
     <div className="col-xl-6 col-lg-6 col-md-6" >
     <img src={logone} className="img-fluid"/> 
     </div>
    <div className='col-xl-6 col-lg-6 col-md-6 '> 
    <h6 className='font-monospace ms-auto'>Artificial Intelligence and Machine Learning</h6>
   <p>Artificial intelligence is intelligence—perceiving, synthesizing, 
       and inferring information—demonstrated by machines, as opposed to
        intelligence displayed by non-human animals and humans</p> 
    </div>
    </div>
    <div className='row container border border-3 border-dark' style={{"borderColor":"281E5D"}} >
     <div className="col-xl-6 col-lg-6 col-md-6" >
     <img src={weblogo} className="img-fluid"/> 
     </div>
    <div className='col-xl-6 col-lg-6 col-md-6 '> 
    <h6 className='font-monospace ms-auto'>Artificial Intelligence and Machine Learning</h6>
   <p>Artificial intelligence is intelligence—perceiving, synthesizing, 
       and inferring information—demonstrated by machines, as opposed to
        intelligence displayed by non-human animals and humans</p> 
    </div>
    </div>
      </div> */}
      {/* <div className='col-3'>
      <EventPanel className="event-panel"/>
      </div> */}
    </>
  )
}
