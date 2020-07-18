import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = { count: 0 }
    this.handleClick = this.handleClick.bind(this)


  }
  handleClick() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        <img src={process.env.PUBLIC_URL + "kitten.jpg"} width="300px" onClick={this.handleClick} />
        <h3>You have click: {this.state.count} time</h3>
        <h3>You have click: {this.state.count} time</h3>


      </div>
    );
  }
}

export default Counter;