import React, { Component } from "react";
import "./bootstrap.min.css";
import "./App.css";
import Header from "./components/header/Header";
import FormAppointment from "./components/formAppointment/FormAppointment";
import AppointmentList from "./components/appointmentList/AppointmentList";

class App extends Component {
  state = {
    reservas: []
  };

  //agrega reservas a nuestro state
  createAppointment = data => {
    //copiamos el estado de nuestro arreglo de reservas
    const arr = [...this.state.reservas, data];
    //agregamos la reserva a nuestro array
    this.setState({
      reservas: arr
    });

    console.log(this.state.reservas);
  };

  //borra reservas de nuestro state
  deleteAppointment = id => {
    //copiamos el estado de nuestro arreglo de reservas
    const arr = [...this.state.reservas];
    //filtramos por el id
    const updatedList = arr.filter(reservas => reservas.id !== id);
    //actualizamos el estado
    this.setState({ 
      reservas: updatedList 
    });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <FormAppointment createAppointment={this.createAppointment} />
            <AppointmentList
              reservas={this.state.reservas}
              deleteAppointment={this.deleteAppointment}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
