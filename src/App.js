import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import ProfilTab from "./ProfilTab/ProfilTab";
import FotoComponent from "./Foto/FotoComponent";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Erster Menüeintrag
          </a>
        </nav>
        <ul className="nav nav-tabs" id="mytab" role="tablist">
          <li className="nav-item">
            <a className="nav-link" id="start-tab" href="#start" data-toggle="tab" role="tab" aria-controls="start" aria-selected="true">
              Test1
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="profil-tab" href="#profil" data-toggle="tab" role="tab" aria-controls="profil" aria-selected="false">
              Test2
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="kontakt-tab" href="#kontakt" data-toggle="tab" role="tab" aria-controls="kontakt" aria-selected="false">
              Test3
            </a>
          </li>
        </ul>

        <div className="tab-content" id="mytabcontetn">
          <div className="tab-pane fade show active" id="start" role="tabpanel" aria-labelledby="start-tab">
            Start
          </div>
          <div className="tab-pane fade" id="profil" role="tabpanel" aria-labelledby="profil-tab">
            <ProfilTab />
          </div>
          <div className="tab-pane fade" id="kontakt" role="tabpanel" aria-labelledby="kontakt-tab">
            Kontakt
          </div>
        </div>
      </div>
    );
  }
}

export default App;
