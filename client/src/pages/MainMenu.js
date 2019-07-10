import React, { Component } from "react";
import "../components/MainMenu/mainMenu.css";
import { Link, withRouter } from "react-router-dom";

// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.

var userName = localStorage.getItem("username");
var signOutDisplay = "";

const checkForUser = () => {
    if (userName) {
      signOutDisplay = "Sign Out";
      return userName;
    } else {
      userName = "Guest";
      signOutDisplay = "Sign In";
      return userName;
    }
  };

checkForUser();

class MainMenu extends React.Component {

  componentDidMount() {
    // Scroll to top of page
    window.scrollTo(0, 0);
  }
  
  signOut = () => {
    window.localStorage.clear();
    window.location.replace("/");  
  }


  render() {
    return(
      <div>

        {/* MAIN MENU */}
        <div className="backgroundColor">
          {/* Link is prebuilt into react-router-dom and is the same as an anchor a tag */}
          <Link to="CalorieEntry" className="mainMenuAnchor">Calorie Entry</Link>
          <Link to="CalorieData" className="mainMenuAnchor">Calorie Data</Link>
          <Link to="StoreFinder" className="mainMenuAnchor">Store Finder</Link>
          <Link to="RecipeFinder" className="mainMenuAnchor">Recipe Finder</Link>
          <Link to="HealthTimeline" className="mainMenuAnchor">Health Timeline</Link>
          {/* <Link to="HealthCard" className="mainMenuAnchor">Digital Health Card</Link> */}
          <Link to="Resources" className="mainMenuAnchor">Resources</Link>
          <Link to="Contact" className="mainMenuAnchor">Contact</Link>
          <span className="mainMenuAnchor" onClick={this.signOut}>{signOutDisplay}</span>
        </div>

      </div>
    );
  }
}

export default MainMenu;