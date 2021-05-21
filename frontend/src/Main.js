import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Koti from "./Koti";
import Varasto from "./Varasto";
import Asiakas from "./Asiakas";
import Toimittaja from "./Toimittaja";
import Myyntitilaus from "./Myyntitilaus";
import Ostotilaus from "./Ostotilaus";
import Myyntilasku from "./Myyntilasku";
import Ostolasku from "./Ostolasku";
 
class Main extends Component {
  render() {
    return (
        <BrowserRouter>
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
          <Route exact path="/" component={Koti}/>
            <Route path="/varasto" component={Varasto}/>
            <Route path="/asiakas" component={Asiakas} />
            <Route path="/toimittaja" component={Toimittaja} />
            <Route path="/myyntitilaus" component={Myyntitilaus} />
            <Route path="/ostotilaus" component={Ostotilaus} />
            <Route path="/myyntilasku" component={Myyntilasku} />
            <Route path="/ostolasku" component={Ostolasku}/>

          </div>
        </div>
        </BrowserRouter>
        
    );
  }
}
 
export default Main;