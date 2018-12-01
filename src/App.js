import React, { Component } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import ThemenTabs from "./ThemenTabs/ThemenTabs";
import Login from "./Login/Login";
import Board from "./Blog/Board";
import ProfilContainer from "./Profil/ProfilContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logedIn: false,
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
        <ThemenTabs />

        <div className="tab-content container" id="mytabcontetn">
          <div className="tab-pane fade show active" id="start" role="tabpanel" aria-labelledby="start-tab">
            <Board />
          </div>
          <div className="tab-pane fade" id="profil" role="tabpanel" aria-labelledby="profil-tab">
            {this.state.logedIn ? <ProfilContainer credentials={this.state} /> : <Login onChange={this.onLogedIn} />}
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
