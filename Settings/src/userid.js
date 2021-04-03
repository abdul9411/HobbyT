import React from 'react';
import './userid.css';

const user = "Username";
const uid= "#1234abcd";


function Us(){
    return(
      <div>
          <h2 className="userr">
              {user}
          </h2>          
          <h3 className="uidd">
              {uid}
          </h3>
      </div>  
    );

}

export default Us;