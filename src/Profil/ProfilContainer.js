import React, { Component } from "react";
import ProfilPortrait from "./ProfilPortrait";
import ProfilEditable from "./ProfilEditable";
import base64 from "base-64";
import MyModal from "../widgets/MyModal";

export default class ProfilContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      name: null,
      alter: null,
      telefonNummer: null,
      email: null,
      image: null,
      modal: false
    };
    this.toggleEditable = this.toggleEditable.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.schickAccount = this.schickAccount.bind(this);
    this.fetchAccount = this.fetchAccount.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  componentDidMount() {
    this.fetchAccount(this.props.credentials);
  }

  toggleEditable() {
    let { editable } = this.state;
    editable = !editable;
    this.setState({
      editable
    });
  }

  toggleModal() {
    let { modal } = this.state;
    modal = !modal;
    this.setState({
      modal
    });
  }

  showModal() {
    this.toggleModal();
    setTimeout(() => {
      this.toggleModal();
      this.toggleEditable();
    }, 3000);
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
        const myBlob = new Blob([body], { type: "image/png" });
        this.setState({
          image: myBlob
        });
        console.log("body: " + body);
      });
  }

  schickAccount(profilObj) {
    console.log("profilObj: " + JSON.stringify(profilObj));
    let { username, password } = this.props.credentials;
    let { name, alter, telefonNummer, image, email } = profilObj;

    let headers = new Headers();

    var data = new FormData();
    data.append("account", JSON.stringify({ name, alter, telefonNummer, image, email }));
    data.append("myImage", image);

    headers.append("Accept", "application/json");
    headers.append("Authorization", "Basic " + base64.encode(username + ":" + password));

    console.log("toggle beginnt");
    this.showModal();

    fetch("http://localhost:8090/api/account/id/c27a0ae4-26c6-4cfb-8812-761a55cc611b", {
      method: "POST",
      credentials: "include",
      headers: headers,
      body: data
    })
      .then(response => {
        if (response.status === 200) {
          console.log("fertig erfolgreich");
          this.setState({
            name: profilObj.name,
            alter: profilObj.alter,
            telefonNummer: profilObj.telefonNummer,
            email: profilObj.email,
            image: profilObj.image
          });
        }
      })
      .catch(error => console.error("Error:", error));
  }

  render() {
    return this.state.editable ? (
      <div>
        {this.state.modal ? <MyModal progress="20" finalState="100" val="0" /> : <ProfilEditable account={this.state} onClick={this.schickAccount} />}
      </div>
    ) : (
      <ProfilPortrait account={this.state} onClick={this.toggleEditable} />
    );
  }
}
