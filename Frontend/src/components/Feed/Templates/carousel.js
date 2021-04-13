import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel'  
function BootstrapCarousel(props){  
               return (  

                        <div>  

                         <div className='container-fluid' >  

                         <Carousel>  

                         <Carousel.Item style={{'height':"400px"}} >  

                         <img style={{'height':"400px"}}  

                         className="d-block w-100"  

                        src={'https://www.fg-a.com/wallpapers/2021-black-random-stones.jpg'}  />  

                           <Carousel.Caption>  
                           <h1>HobbyT is looking for advertisements</h1>
                                 </Carousel.Caption>  

                                 </Carousel.Item  >  

                                 <Carousel.Item style={{'height':"400px"}}>  

                                 <img style={{'height':"400px"}}  

                                   className="d-block w-100"  

                                    src={"https://www.fg-a.com/wallpapers/2021-black-random-stones.jpg"}    />  

                                       <Carousel.Caption>  
                                   <h3>Stay connected and Anonymous with HobbyT</h3>  

                                      </Carousel.Caption>  

                                         </Carousel.Item>  

                                       <Carousel.Item style={{'height':"400px"}}>  

                                       <img style={{'height':"400px"}}  

                                        className="d-block w-100"  

                                         src={"https://www.fg-a.com/wallpapers/2021-black-random-stones.jpg"}   />  

                                        <Carousel.Caption>  
                                          <h3> #BlackLivesMatter</h3>
                                          <p>HobbyT stands for justice, freedom and racial equality</p>  

                                          </Carousel.Caption>  

                                         </Carousel.Item>  

                                        </Carousel>  

                                </div>  

                        </div>  

                )  

        }  


export default BootstrapCarousel  
