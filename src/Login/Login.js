import React, { Component } from "react";
import fetch from "isomorphic-fetch";
import base64 from "base-64";
import { Form, Button, FormGroup, Label, Input } from "reactstrap";
import loginForm from "./Login.css";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onUsernameChange(e) {
    let { username } = this.state;
    username = e.target.value;
    this.setState({
      username
    });
  }

  onPasswordChange(e) {
    let { password } = this.state;
    password = e.target.value;
    this.setState({
      password
    });
  }

  onSubmit(e) {
    e.preventDefault();
    let headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append("Authorization", "Basic " + base64.encode(this.state.username + ":" + this.state.password));
    fetch("http://localhost:8090/login", {
      headers: headers,
      method: "GET",
      credentials: "include"
    }).then(response => {
      if (response.status === 200) {
        this.props.onChange(this.state);
      }
    });
  }

  render() {
    return (
      <Form method="post" className="loginForm" id="myForm">
        <FormGroup className="">
          <Label>Benutzername</Label>
          <Input type="text" name="benutzername" onChange={this.onUsernameChange} />
        </FormGroup>
        <FormGroup className="">
          <Label>Passwort</Label>
          <Input type="password" name="password" onChange={this.onPasswordChange} />
        </FormGroup>
        <Button type="submit" onClick={this.onSubmit} color="primary">
          login...
        </Button>
      </Form>
    );
  }
}
