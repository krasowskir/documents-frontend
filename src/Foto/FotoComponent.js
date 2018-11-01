import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./foto.css";

export default class FotoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const file = e.target.files[0];
    console.info("image changed" + file.name);
    let { image } = this.state;
    image = file;
    this.setState({
      image
    });
  }

  render() {
    let result = null;

    return (
      <form className="fotodiv">
        <div className="fotocontent">
          {this.state.image != null ? (
            <img src={URL.createObjectURL(this.state.image)} alt="could not be rendered" className="fotoimage" />
          ) : (
            <i class="fas fa-user fa-7x" aria-hidden="true" />
          )}
        </div>
        <form action="http://localhost:8090/fotoupload" method="POST" encType="multipart/form-data">
          <div className="form-group fotouploadcomponent">
            <label for="exampleFormControl ">Foto hochladen...</label>
            <input type="file" className="form-control-file" id="file" name="file" onChange={this.onChange} />
            <input type="submit" />
          </div>
        </form>
      </form>
    );
  }
}
