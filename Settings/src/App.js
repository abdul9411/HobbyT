import React, { useState } from 'react';
import Us from './userid';
import DarkSwitch from './darkS';
import styled, { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme, GlobalStyles } from "./themes"
import Switch from './switch';
import "./App.css"


const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
  transition : 0.4s;
`;

function App() {






  const [theme, setTheme] = useState("dark");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };




  return (
    <ThemeProvider theme={theme === "dark" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
          
        
        <h2 className="title">⚙️ Preferences</h2>
        <img className="testImage" src="https://www.worldfuturecouncil.org/wp-content/uploads/2020/02/dummy-profile-pic-300x300-1.png"></img>


        <br></br>
        <Us />

        <div className="togg">
          <DarkSwitch rounded={true} onToggle={themeToggler} />
          <Switch rounded={true} />
        </div>

        <br></br>


        <h3 className="cpp">✏️ Customize profile</h3>
        <hr></hr>
        <div className="customize-profile">
          <h4>Change Username</h4>
          <h4>Change Profile Picture</h4>
          <h4>Reset Password</h4>
        </div>
        <br></br>
        <br></br>

        <h3 className="soc">👥 Social</h3>
        <hr></hr>
        <div className="social">
          <h4>Tags</h4>
          <h4>My Groups</h4>
          <h4>My Buddies</h4>
          <h4>Blocked</h4>
        </div>
        <br></br>
        <br></br>

        <h3 className="ps">🔐 Privacy and Security</h3>
        <hr></hr>
        <div className="pns">
          <h4>Privacy Settungs</h4>
          <h4>Location Access</h4>
          <h4>Sign Out</h4>
          <h4 className="del">Delete Account</h4>
        </div>



      </StyledApp>
    </ThemeProvider>
  );
}

export default App;