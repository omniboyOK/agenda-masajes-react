import React, { Component } from "react";
import "./bootstrap.min.css";
import Header from "./components/header/Header";
import FormAppointment from "./components/formAppointment/FormAppointment";
import AppointmentList from "./components/appointmentList/AppointmentList";

class App extends Component {
  state = {
    reservas: []
  };

  createAppointment = data => {
    //copiamos el estado de nuestro arreglo de reservas
    const arr = [...this.state.reservas, data];
    //agregamos la reserva a nuestro array
    this.setState({
      reservas: arr
    });

    console.log(this.state.reservas);
  };

  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <FormAppointment createAppointment={this.createAppointment} />
            <AppointmentList reservas={this.state.reservas} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
