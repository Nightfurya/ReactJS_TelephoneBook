import React, { Component } from "react";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="link__container">
          <a
            href="https://create-react-app.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="link link__header"
          >
            React
          </a>
        </div>
        <div className="paragraph__container">
          <p className="paragraph__header">Telephone Book</p>
        </div>
      </header>
    );
  }
}

export default Header;
