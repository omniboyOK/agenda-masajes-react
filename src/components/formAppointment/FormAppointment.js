import React, { Component } from "react";
import uuid from "uuid";

const defaultState = {
  reserva: {
    nombre: "",
    apellido: "",
    fecha: "",
    hora: "",
    aclaraciones: "",
    espalda: false,
    brazos: false,
    cabeza: false,
    piernas: false,
    pecho: false
  }
};

class FormAppointment extends Component {
  state = { ...defaultState };

  //Cuando el usuario cambia algun valor del formulario
  handleChange = e => {
    this.setState({
      reserva: {
        ...this.state.reserva,
        [e.target.name]: e.target.value
      }
    });
  };

  //Cuando el usuario cambia el valor de un checkbox
  handleSwitch = e => {
    this.setState({
      reserva: {
        ...this.state.reserva,
        [e.target.name]: e.target.checked
      }
    });
  };

  //Cuando el usuario confirma el formulario
  handleSubmit = e => {
    e.preventDefault();

    //generamos un nuevo objeto a partir de
    const newAppointment = { ...this.state.reserva };

    newAppointment.id = uuid();

    //llamamos a la función padre que guardara nuestros datos
    this.props.createAppointment(newAppointment);

    //volvemos el state a su estado inicial
    this.setState({ ...defaultState });
  };

  render() {
    return (
      <div className="card mt-5">
        <h2 className="card-header text-center mb-5">
          Llena el formulario para crear una reserva
        </h2>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Nombre</label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  name="nombre"
                  onChange={this.handleChange}
                  value={this.state.reserva.nombre}
                  required
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Apellido
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Apellido"
                  name="apellido"
                  onChange={this.handleChange}
                  value={this.state.reserva.apellido}
                  required
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="fecha"
                  onChange={this.handleChange}
                  value={this.state.reserva.fecha}
                  required
                />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  name="hora"
                  onChange={this.handleChange}
                  value={this.state.reserva.hora}
                  required
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-sm-12 col-lg-12">
                <label>Areas</label>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="espalda"
                    onChange={this.handleSwitch}
                    value={this.state.reserva.espalda}
                  />
                  <label>Espalda</label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="pecho"
                    onChange={this.handleSwitch}
                    value={this.state.reserva.pecho}
                  />
                  <label>Pecho</label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="piernas"
                    onChange={this.handleSwitch}
                    value={this.state.reserva.piernas}
                  />
                  <label>Piernas</label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="brazos"
                    onChange={this.handleSwitch}
                    value={this.state.reserva.brazos}
                  />
                  <label>Brazos</label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="cabeza"
                    onChange={this.handleSwitch}
                    value={this.state.reserva.cabeza}
                  />
                  <label>Cabeza</label>
                </div>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Aclaraciones
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Escriba aqui.."
                  name="aclaraciones"
                  onChange={this.handleChange}
                  value={this.state.reserva.aclaraciones}
                />
              </div>
            </div>

            <input
              type="submit"
              className="py-3 mt-2 btn btn-success btn-block"
              value="Confirmar Reserva"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default FormAppointment;