import React, { Component } from "react";
import { Form, Button, FormGroup, Label, Input } from "reactstrap";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Form method="post">
        <FormGroup>
          <Label>Benutzername</Label>
          <Input type="text" />
        </FormGroup>
        <FormGroup>
          <Label>Passwort</Label>
          <Input type="password" />
        </FormGroup>
        <Button type="submit">login...</Button>
      </Form>
    );
  }
}
