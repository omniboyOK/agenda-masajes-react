import React, { Component } from "react";

class FormAppointment extends Component {
  state = {
    cita: {
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

  handleChange = e => {
    this.setState({
      cita: {
        ...this.state.cita,
        [e.target.name]: e.target.value
      }
    });

    console.log(this.state);
  };

  handleSwitch = e => {
    this.setState({
      cita: {
        ...this.state.cita,
        [e.target.name]: e.target.checked
      }
    });

    console.log(this.state);
  };

  render() {
    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
            Llena el formulario para reservar una cita
          </h2>

          <form>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Nombre</label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  name="nombre"
                  onChange={this.handleChange}
                  value={this.state.cita.nombre}
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
                  value={this.state.cita.apellido}
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
                  value={this.state.cita.fecha}
                />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  name="hora"
                  onChange={this.handleChange}
                  value={this.state.cita.hora}
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-sm-12 col-lg-12">
                <label>Areas</label>
                <div>
                  <label>Espalda</label>
                  <input
                    type="checkbox"
                    className="btn btn-default"
                    name="espalda"
                    onChange={this.handleSwitch}
                    value={this.state.cita.espalda}
                  />
                </div>
                <div>
                  <label>Pecho</label>
                  <input
                    type="checkbox"
                    className="btn btn-default"
                    name="pecho"
                    onChange={this.handleSwitch}
                    value={this.state.cita.pecho}
                  />
                </div>
                <div className="col-sm">
                  <label>Piernas</label>
                  <input
                    type="checkbox"
                    className="btn btn-default"
                    name="piernas"
                    onChange={this.handleSwitch}
                    value={this.state.cita.piernas}
                  />
                </div>
                <div className="col-sm">
                  <label>Brazos</label>
                  <input
                    type="checkbox"
                    className="btn btn-default"
                    name="brazos"
                    onChange={this.handleSwitch}
                    value={this.state.cita.brazos}
                  />
                </div>
                <div className="col-sm">
                  <label>Cabeza</label>
                  <input
                    type="checkbox"
                    className="btn btn-default"
                    name="cabeza"
                    onChange={this.handleSwitch}
                    value={this.state.cita.cabeza}
                  />
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
                  checked={this.state.espalda}
                />
              </div>
            </div>

            <input
              type="submit"
              className="py-3 mt-2 btn btn-success btn-block"
              value="Confirmar cita"
              onChange={this.handleChange}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default FormAppointment;
