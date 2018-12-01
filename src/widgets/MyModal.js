import React, { Component } from "react";
import { Modal, Progress, ModalHeader, ModalBody } from "reactstrap";
let tickinterval;

export default class MyModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 0,
      finalState: 100,
      progress: 10
    };
  }

  componentDidMount() {
    tickinterval = setInterval(() => {
      this.setState({
        val: this.state.val + this.state.progress
      });
    }, 250);
  }

  componentWillUnmount() {
    clearInterval(tickinterval);
  }

  shouldComponentUpdate() {
    let { val, finalState } = this.state;
    if (val < finalState) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <Modal isOpen={this.state.val >= this.state.finalState ? false : true}>
        <ModalHeader>Account abgeben</ModalHeader>
        <ModalBody>
          <Progress striped value={this.state.val} />
        </ModalBody>
      </Modal>
    );
  }
}
