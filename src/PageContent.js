import React, { Component } from "react";
import {ThemeContext} from "./contexts/ThemeContext"

export default class PageContent extends Component {

  static contextType = ThemeContext;

  render() {

    const {isDarkMode} = this.context

    const styles = {
      backgroundColor: isDarkMode ? "#232B2B" : "#f9f9f9",
      height: "100vh",
      width: "100vw",
    };

    return <div style={styles}>{this.props.children}</div>;
  }
}

//create a context to store one piece of data in the state
//a boolean value and a method to change the darktheme