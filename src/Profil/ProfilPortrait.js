import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import Profileigenschaften from "./Profileeigenschaften";
import "./profil.scss";
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

  componentDidMount() {
    let { name, alter, email, telefonNr, image } = this.state;
    name = this.props.account.name;
    alter = this.props.account.alter;
    telefonNr = this.props.account.telefonNummer;
    email = this.props.account.email;
    image = this.props.account.image;
    this.setState({
      name,
      alter,
      email,
      telefonNr,
      image
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log("this.props " + this.props.name, this.props.alter, this.props.email, this.props.telefonNr);
    console.log("nextProps: " + nextProps.account.name, nextProps.account.alter, nextProps.account.email, nextProps.account.telefonNr);
    let { name, alter, email, telefonNr, image } = this.state;
    name = nextProps.account.name;
    alter = nextProps.account.alter;
    telefonNr = nextProps.account.telefonNummer;
    email = nextProps.account.email;
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
      <Card className="card o-card">
        <CardImg className="card-img-top card__image" alt="Card image cap" src={this.state.image != null ? URL.createObjectURL(image) : null} />
        <CardBody>
          <CardTitle className="card-title">{this.state.name}</CardTitle>
          <Profileigenschaften attribute={this.state} />
          <Button className="btn btn-success" onClick={this.props.onClick}>
            Bearbeiten
          </Button>
        </CardBody>
      </Card>
    );
  }
}
