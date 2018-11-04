import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./foto.css";

export default props => {
  let result = null;

  return (
    <div className="fotocontainer col-md-2 ">
      {props.image != null ? (
        <img src={URL.createObjectURL(props.image)} alt="could not be rendered" className="fotoimage" />
      ) : (
        <i className="fas fa-user fa-7x" aria-hidden="true" />
      )}

      <div className="fotouploadcomponent">
        <label>Foto hochladen...</label>
        <input type="file" className="form-control-file" id="file" name="imageFile" onChange={props.onChange} />
      </div>
    </div>
  );
};
