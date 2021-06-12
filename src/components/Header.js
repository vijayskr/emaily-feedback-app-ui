import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
        <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">Emaily Feedback</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a>Login with Google</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
