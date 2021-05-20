import React, { Component } from "react";
 
class Main extends Component {
  render() {
    return (
        <div>
          <h1>Yksinkertainen SPA</h1>
          <ul className="header">
            <li><a href="/">Koti</a></li>
            <li><a href="/tarina">Tarinat</a></li>
            <li><a href="/yhteys">Yhteys</a></li>
          </ul>
          <div className="content">
             
          </div>
        </div>
    );
  }
}
 
export default Main;