import React, { Component } from "react";
 
class Main extends Component {
  render() {
    return (
        <div>
          <h1>Tilausjärjestelmä</h1>
          <ul className="header">
            <li><a href="/">Koti</a></li>
            <li><a href="/varasto">Varasto</a></li>
            <li><a href="/asiakas">Asiakas</a></li>
            <li><a href="/toimittaja">Toimittaja</a></li>
            <li><a href="/myyntitilaus">Myyntitilaus</a></li>
            <li><a href="/Ostotilaus">Ostotilaus</a></li>
            <li><a href="/myyntilasku">Myyntilasku</a></li>
            <li><a href="/ostolasku">Ostolasku</a></li>
          </ul>
          <div className="content">
             
          </div>
        </div>
    );
  }
}
 
export default Main;