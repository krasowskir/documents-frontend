import React, { Component } from "react";
import FotoComponent from "../Foto/FotoComponent";
import MyInput from "../widgets/Input";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./profil.scss";

export default class ProfilEditable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: true,
      name: null,
      alter: null,
      telefonNummer: null,
      email: null,
      image: null
    };
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAlter = this.onChangeAlter.bind(this);
    this.onChangeTel = this.onChangeTel.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    let { name, alter, telefonNummer, email } = this.props.account;
    console.log("didMount " + name, alter, telefonNummer, email);
    this.setState({
      editable: false,
      name,
      alter,
      telefonNummer,
      email
    });
  }

  onChangeImage(e) {
    const file = e.target.files[0];
    console.info("image changed" + file.name);
    let { image } = this.state;
    image = file;
    this.setState({
      image
    });
  }

  onChangeName(e) {
    let { name } = this.state;
    name = e.target.value;
    this.setState({
      name
    });
  }
  onChangeAlter(e) {
    let { alter } = this.state;
    alter = e.target.value;
    this.setState({
      alter
    });
  }
  onChangeTel(e) {
    let { tel } = this.state;
    tel = e.target.value;
    this.setState({
      tel
    });
  }
  onChangeEmail(e) {
    let { email } = this.state;
    email = e.target.value;
    this.setState({
      email
    });
  }

  onClick() {
    console.log("editable state: " + JSON.stringify(this.state));
    this.props.onClick(this.state);
  }

  render() {
    return (
      <div className="row" id="myForm" encType="multipart/form-data">
        <div className="meinform col-md-4 offset-md-2">
          <MyInput type="text" name="name" placeholder="Name..." value={this.state.name} onChange={this.onChangeName} />
          <MyInput type="text" name="alter" placeholder="Alter..." value={this.state.alter} onChange={this.onChangeAlter} />
          <MyInput type="text" name="tel" placeholder="Telefonnummer..." value={this.state.telefonNummer} onChange={this.onChangeTel} />
          <MyInput type="text" name="email" placeholder="Email..." value={this.state.email} onChange={this.onChangeEmail} />
          <Button type="button" className="btn" color="primary" onClick={this.onClick}>
            Abgeben
          </Button>
        </div>
        <FotoComponent onChange={this.onChangeImage} image={this.state.image} />
      </div>
    );
  }
}
