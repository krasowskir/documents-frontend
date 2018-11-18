import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import "./Board.scss";

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      currentPost: ""
    };
    this.addComment = this.addComment.bind(this);
    this.currentPostChange = this.currentPostChange.bind(this);
  }

  addComment() {
    let { currentPost, posts } = this.state;
    posts.push(currentPost);
    currentPost = "";
    this.setState({
      posts,
      currentPost
    });
  }

  currentPostChange(e) {
    let { currentPost } = this.state;
    currentPost = e.target.value;
    this.setState({
      currentPost
    });
  }

  render() {
    return (
      <div className="board">
        <ul>
          {this.state.posts.map((v, i) => (
            <li>{v}</li>
          ))}
        </ul>

        <Form className="o-form">
          <FormGroup>
            <Label for="exampleText">was habe ich zu sagen?</Label>
            <Input type="textarea" id="exampleText" placeholder="was habe ich zu sagen..." onChange={this.currentPostChange} />
          </FormGroup>
          <Button className="btn" color="primary" onClick={this.addComment}>
            posten...
          </Button>
        </Form>
      </div>
    );
  }
}
