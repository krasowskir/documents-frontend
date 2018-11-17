import React, { Component } from "react";
import "./App.css";
import fetch from "isomorphic-fetch";
import base64 from "base-64";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Login from "./Login/Login";
import ProfilContainer from "./Profil/ProfilContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logedIn: null,
      editable: false,
      username: "",
      password: ""
    };
    this.renderDefault = this.renderDefault.bind(this);
    this.onLogedIn = this.onLogedIn.bind(this);
  }

  onLogedIn(credentails) {
    let { logedIn, username, password } = this.state;
    logedIn = true;
    username = credentails.username;
    password = credentails.password;
    this.setState({
      logedIn,
      username,
      password
    });
  }

  renderDefault() {
    return (
      <div className="profilContainer">
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
            <ProfilContainer credentials={this.state} />
          </div>
          <div className="tab-pane fade" id="kontakt" role="tabpanel" aria-labelledby="kontakt-tab">
            Kontakt
          </div>
        </div>
      </div>
    );
  }
  render() {
    return this.state.logedIn == null ? <Login onChange={this.onLogedIn} /> : this.renderDefault();
  }
}

export default App;
