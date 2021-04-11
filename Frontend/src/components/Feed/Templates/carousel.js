import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel'  
export class BootstrapCarousel extends Component {  
        render() {  
  

               return (  

                        <div>  

                         <div className='container-fluid' >  

                         <Carousel>  

                         <Carousel.Item style={{'height':"400px"}} >  

                         <img style={{'height':"400px"}}  

                         className="d-block w-100"  

                        src={'https://carolinawxauthority.com/wp-content/uploads/2017/07/northern_lights_lyngenfjord_northern_norway_nav_d3ffe4a3-bde9-4ffa-8a1c-a42b84c60681.jpg'}  />  

                           <Carousel.Caption>  

                             <h3>Item 1 </h3>  

                                 </Carousel.Caption>  

                                 </Carousel.Item  >  

                                 <Carousel.Item style={{'height':"400px"}}>  

                                 <img style={{'height':"400px"}}  

                                   className="d-block w-100"  

                                    src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/330px-Image_created_with_a_mobile_phone.png"}    />  

                                       <Carousel.Caption>  

                                   <h3>Item 2</h3>  

                                      </Carousel.Caption>  

                                         </Carousel.Item>  

                                       <Carousel.Item style={{'height':"400px"}}>  

                                       <img style={{'height':"400px"}}  

                                        className="d-block w-100"  

                                         src={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"}   />  

                                        <Carousel.Caption>  
                                          <h3> Item 3</h3>  

                                          </Carousel.Caption>  

                                         </Carousel.Item>  

                                        </Carousel>  

                                </div>  

                        </div>  

                )  

        }  

}  

export default BootstrapCarousel  