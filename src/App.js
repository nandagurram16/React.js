import React, { Component } from 'react';

export default class App extends Component {
  state = {
    ename: 'Nanda',
    products: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ products: data }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <center>
          {/* Passing ename to the Display component */}

          {/* Mapping over the products array */}
          <ul>
            {this.state.products.map((product) => (
              <li key={product.id}>{product.name}</li> // Using "name" instead of "title"
            ))}
          </ul>

          <h1>Hello {this.state.ename}</h1>
          <br />

          {/* Button to change ename */}
          <button onClick={() => this.setState({ ename: 'Kumar' })}>
            Change Name
          </button>
        </center>
      </>
    );
  }
}
