import React, { Component } from "react";
import { Table } from "reactstrap";

export default props => (
  <Table>
    <thead>
      <tr>
        <td>Eigenschaft</td>
        <td>Wert</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Name:</td>
        <td>
          <p className="card-text">{props.attribute.name}</p>
        </td>
      </tr>
      <tr>
        <td>Alter:</td>
        <td>
          <p className="card-text">{props.attribute.alter}</p>
        </td>
      </tr>
      <tr>
        <td>Telefonnr:</td>
        <td>
          <p className="card-text">{props.attribute.telefonNr}</p>
        </td>
      </tr>
      <tr>
        <td>Email:</td>
        <td>
          <p className="card-text">{props.attribute.email}</p>
        </td>
      </tr>
    </tbody>
  </Table>
);
