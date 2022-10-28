import React, { Component } from "react";

class ErrorBoundery extends Component {

  constructor(props){
    super(props)

    this.state = {
        activo: false,
    }
  }

  estaACtivo = () => {
    return this.state.activo ? "activo" : "no esta activo";
  };

  render() {
    return (
      <>
      <h1>{this.props.saludo}</h1>
      <h2>{this.estaACtivo()}</h2>
      </>
    );
  }
}

export default ErrorBoundery;