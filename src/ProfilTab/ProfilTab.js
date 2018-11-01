import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./profil.css";

export default class ProfilTab extends Component {
  render() {
    return (
      <div className="meinform">
        <form>
          <div className="form-group">
            <label for="name">Name</label>
            <input type="text" className="form-control" id="name" aria-describedby="name" placeholder="Name..." />
          </div>
          <div className="form-group">
            <label for="alter">Alter</label>
            <input type="text" className="form-control" id="name" aria-describedby="alter" placeholder="Alter..." />
          </div>
          <div className="form-group">
            <label for="email">Email Adresse</label>
            <input type="text" className="form-control" id="email" aria-describedby="email" placeholder="Email..." />
          </div>
          <button type="submit" className="btn btn-primary">
            Abgeben
          </button>
        </form>
      </div>
    );
  }
}
