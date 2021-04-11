// import { Widgets } from "@material-ui/icons";
import React from "react";
import "./widgets.css";
import BootstrapCarousel from './Templates/carousel'
// const data = Exporting()
function Community(){
    return(
      <div className= "widgets">
        <div className="top-post">
          <h2>Top Post</h2>
          </div>
        <div className="widgets1">
   <BootstrapCarousel slideshowSpeed></BootstrapCarousel>  
        </div>
        </div>
    );
}
export default Community; 