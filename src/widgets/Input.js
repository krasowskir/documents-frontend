import React from "react";
import { Input, Label, FormGroup } from "reactstrap";

const MyInput = ({ label, placeholder, type, onChange, name, value }) => {
  return (
    <FormGroup>
      <Label>{label}</Label>
      <Input type={type} placeholder={placeholder} value={value} onChange={onChange} name={name} />
    </FormGroup>
  );
};

export default MyInput;
