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

  onClickCityHandler = () => {
    this.setState({activo: true});
  }

  componentDidMount(){
    console.log("el componente se ha montado");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Estado previo" , prevState.activo);
    console.log("Estado nuevo" , this.state.activo);
    console.log("el componente se ha actualizado");
  }

  componentWillUnmount(){
    console.log("el componente se ha montado");
  }

  render() {
    return (
      <>
      <h1>{this.props.saludo}</h1>
      <h2>{this.estaACtivo()}</h2>
      <button onClick={ () => {this.onClickCityHandler()} }> Activar</button>
      </>
    );
  }
}

export default ErrorBoundery;