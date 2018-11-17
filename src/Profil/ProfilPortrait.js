import React, { Component } from "react";
import { Card } from "reactstrap";
import "./profil.css";
import { Button } from "reactstrap";

export default class ProfilPortrait extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      alter: "",
      email: "",
      telefonNr: "",
      image: null
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log("this.props " + this.props.name, this.props.alter, this.props.email, this.props.telefonNr);
    console.log("nextProps: " + nextProps.account.name, nextProps.account.alter, nextProps.account.email, nextProps.account.telefonNr);
    let { name, alter, email, telefonNr, image } = this.state;
    name = nextProps.account.name;
    alter = nextProps.account.alter;
    telefonNr = nextProps.account.telefonNummer;
    email = nextProps.account.emailAdresse;
    image = nextProps.account.image;
    console.log("receiveProps props " + name, alter, telefonNr, email);
    this.setState({
      name,
      alter,
      email,
      telefonNr,
      image
    });
  }

  render() {
    let { image } = this.state;

    return (
      <Card className="card cardStyle">
        <Button className="btn btn-success" onClick={this.props.onClick}>
          Bearbeiten
        </Button>
        {image != null ? (
          <img className="card-img-top" alt="Card image cap" src={URL.createObjectURL(image)} />
        ) : (
          <img className="card-img-top" alt="Card image cap" src="" />
        )}
        <h5 className="card-title">{this.state.name}</h5>
        <p className="card-text">{this.state.alter}</p>
        <p className="card-text">{this.state.email}</p>
        <p className="card-text">{this.state.telefonNr}</p>
      </Card>
    );
  }
}
