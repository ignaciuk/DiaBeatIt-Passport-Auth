import React from "react";
import "./helloUserAndSignOut.css";



var userName = localStorage.getItem("username");
var signOutDisplay = "Sign Out";

const checkForUser = () => {
    if (userName) {
      return userName;
    } else {
      userName = "Guest";
      signOutDisplay = "Sign In";
      return userName;
    }
  };

checkForUser();

class HelloUserAndSignOut extends React.Component {

  signOut = () => {
    window.localStorage.clear();
    window.location.replace("/");  
  }

  render() {
    return(
      <div>             
        <div className="helloUserTxt">Hello <span className="userFirstName">{userName}!</span></div>
        <div className="signOutContainer"><span className="signOutAnchor" onClick={this.signOut}>{signOutDisplay}</span></div>
      </div>   
    )
  }
}

export default HelloUserAndSignOut;