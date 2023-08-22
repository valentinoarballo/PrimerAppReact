import React, {Component} from "react";

class Clock extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          currentTime: new Date()
        };
      }
    
      componentDidMount() {
        this.intervalID = setInterval(() => {
          this.setState({
            currentTime: new Date()
          });
        }, 1000);
      }
    
      componentWillUnmount() {
        clearInterval(this.intervalID);
      } 

    render () {
        var tiempoActual = new Date();
        var horas = tiempoActual.getHours();
        var minutos = tiempoActual.getMinutes();
        var segundos = tiempoActual.getSeconds();

        return (
            <h1>{horas}:{minutos}:{segundos}</h1>
        );
    }
}

export default Clock;