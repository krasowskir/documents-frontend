import React from "react";
import { Input, Label, FormGroup } from "reactstrap";

const MyInput = ({ label, placeholder, type, onChange, name }) => {
  return (
    <FormGroup>
      <Label>{label}</Label>
      <Input type={type} placeholder={placeholder} onChange={onChange} name={name} />
    </FormGroup>
  );
};

export default MyInput;
