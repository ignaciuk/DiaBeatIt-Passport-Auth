import React from "react";
import "./helloUserAndSignOut.css";



var userName = localStorage.getItem("username");

const checkForUser = () => {
    if (userName) {
      return userName;
    } else {
      userName = "Guest";
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
        <div className="signOutContainer"><span className="signOutAnchor" onClick={this.signOut}>Sign Out</span></div>
      </div>   
    )
  }
}

export default HelloUserAndSignOut;