import React, { Component } from 'react'

export class Display extends Component {
  render() {
    return (
      <div>
        <h3>iam from display component  {this.props.name}</h3>
      </div>
    )
  }
}

export default Display
