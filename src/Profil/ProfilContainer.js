import React, { Component } from "react";
import ProfilPortrait from "./ProfilPortrait";
import ProfilEditable from "./ProfilEditable";
import base64 from "base-64";

export default class ProfilContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      name: null,
      alter: null,
      telefonNummer: null,
      email: null,
      image: null
    };
    this.toggleEditable = this.toggleEditable.bind(this);
  }

  componentDidMount() {
    //let { username, password } = this.props.credentials;
    //console.log("credentials: " + username, password);
    //this.fetchAccount({ username, password });
  }

  toggleEditable() {
    let { editable } = this.state;
    editable = !editable;
    this.setState({
      editable
    });
  }

  fetchAccount(credentials) {
    console.log("credentials: " + credentials.username, credentials.password);
    let { username, password } = credentials;

    let headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append("Authorization", "Basic " + base64.encode(username + ":" + password));
    fetch("http://localhost:8090/api/account/id/c27a0ae4-26c6-4cfb-8812-761a55cc611b", {
      method: "GET",
      headers: headers,
      credentials: "include"
    })
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then(json => {
        this.onAccountUpdated(json);
        console.log("json: " + JSON.stringify(json));
      });
  }

  onAccountUpdated(meinProfil) {
    console.log("onAccountUpdated aufgerufen: " + JSON.stringify(meinProfil));
    this.fetchAccountImage();
    let { name, alter, telefonNummer, email } = this.state;
    name = meinProfil.name;
    alter = meinProfil.alter;
    telefonNummer = meinProfil.telefonNummer;
    email = meinProfil.emailAdresse;
    this.setState({
      name,
      alter,
      telefonNummer,
      email
    });
  }

  fetchAccountImage() {
    let { username, password } = this.props.credentials;
    console.log("image credentials: " + username, password);
    let headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append("Authorization", "Basic " + base64.encode(username + ":" + password));
    fetch("http://localhost:8090/api/account/image/id/c27a0ae4-26c6-4cfb-8812-761a55cc611b", {
      method: "GET",
      headers: headers,
      credentials: "include"
    })
      .then(response => {
        if (response.status === 200) {
          return response.blob();
        }
      })
      .then(body => {
        this.onAccountImageFetched(body);
        console.log("body: " + body);
      });
  }

  onAccountImageFetched(myImage) {
    let { image } = this.state;
    image = myImage;
    this.setState({
      image
    });
  }

  render() {
    return this.state.editable ? (
      <ProfilEditable account={{ name: "richard", telefonNummer: "015140460849", alter: "27", email: "krtoni@arcor.de" }} onClick={this.toggleEditable} />
    ) : (
      <ProfilPortrait account={{ name: "richard", telefonNummer: "015140460849", alter: "27", email: "krtoni@arcor.de" }} onClick={this.toggleEditable} />
    );
  }
}
