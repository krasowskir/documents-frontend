import React, { Component } from "react";
import FotoComponent from "../Foto/FotoComponent";
import MyInput from "../widgets/Input";
import { Button, Form } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./profil.css";

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
    this.onSubmit = this.onSubmit.bind(this);
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

  onSubmit() {
    console.info("submitted with: " + JSON.stringify(this.state));
    var form = document.querySelector("myForm");
    this.props.onClick();
    fetch("http://localhost:8090/api/accountPost", {
      method: "POST",
      body: new FormData(form)
    }).then(response => {
      if (response.status == "200") {
        console.log(JSON.stringify(response));
      }
    });
  }

  render() {
    return (
      <Form className="row" method="post" id="myForm" encType="multipart/form-data">
        <div className="meinform col-md-4 offset-md-2">
          <MyInput type="text" name="name" placeholder="Name..." value={this.state.name} onChange={this.onChangeName} />
          <MyInput type="text" name="alter" placeholder="Alter..." value={this.state.alter} onChange={this.onChangeAlter} />
          <MyInput type="text" name="tel" placeholder="Telefonnummer..." value={this.state.telefonNummer} onChange={this.onChangeTel} />
          <MyInput type="text" name="email" placeholder="Email..." value={this.state.email} onChange={this.onChangeEmail} />
          <Button type="submit" className="btn btn-primary">
            Abgeben
          </Button>
        </div>
        <FotoComponent onChange={this.onChangeImage} image={this.state.image} />
      </Form>
    );
  }
}
