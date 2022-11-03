import React, { Component } from "react";

class ErrorBoundery extends Component {

  constructor(props){
    super(props)

    this.state = {
        hasError: false
    }
  }

  static getDerivedStateFromError(error){
    return {hasError: true}
  }

  componentDidCatch(error, errorInfo){
    console.log(errorInfo)
  }

  render() {
    return (
     
        this.state.hasError ? <h1>hubo un error</h1> : this.props.children
        
    );
  }
}

export default ErrorBoundery;