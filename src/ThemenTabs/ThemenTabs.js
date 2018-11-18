import React, { Component } from "react";

export default props => (
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
);
