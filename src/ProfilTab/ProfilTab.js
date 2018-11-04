import React, { Component } from "react";
import FotoComponent from "../Foto/FotoComponent";
import MyInput from "../widgets/Input";
import { Button, Form } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./profil.css";

export default class ProfilTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      alter: null,
      telefonnummer: null,
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
    fetch("http://localhost:8090/api/accountPost", {
      method: "POST",
      body: JSON.stringify(this.state)
    }).then(response => response.json());
  }

  render() {
    return (
      <Form className="row" method="post" action="http://localhost:8090/api/accountPost" encType="multipart/form-data">
        <div className="meinform col-md-4 offset-md-2">
          <MyInput type="text" name="name" placeholder="Name..." onChange={this.onChangeName} />
          <MyInput type="text" name="alter" placeholder="Alter..." onChange={this.onChangeAlter} />
          <MyInput type="text" name="tel" placeholder="Telefonnummer..." onChange={this.onChangeTel} />
          <MyInput type="text" name="email" placeholder="Email..." onChange={this.onChangeEmail} />
          <Button type="submit" className="btn btn-primary">
            Abgeben
          </Button>
        </div>
        <FotoComponent onChange={this.onChangeImage} image={this.state.image} />
      </Form>
    );
  }
}
