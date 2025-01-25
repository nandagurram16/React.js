import React, { Component } from 'react'

export default class Display extends Component {
  render() {
    return (
      <div>
        <h1>
            {this.props.data.map(product => <li key={product.id}>{product.name}</li>)}
        </h1>
      </div>
    )
  }
}
