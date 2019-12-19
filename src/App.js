import React, { Component } from "react";
import "./bootstrap.min.css";
import Header from "./components/header/Header";
import Cita from "./components/formAppointment/FormAppointment";
import AppointmentList from "./components/appointmentList/AppointmentList";

class App extends Component {
  state = {
    citas: []
  };

  createAppointment = data => {
    //copiamos el estado de nuestro arreglo de citas
    const arr = [...this.state.citas, data];
    //agregamos la cita a nuestro array
    this.setState({
      citas: arr
    });

    console.log(this.state.citas);
  };

  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <Cita createAppointment={this.createAppointment} />
            <AppointmentList citas={this.state.citas} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
