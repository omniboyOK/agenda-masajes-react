import React, { Component } from "react";

class FormAppointment extends Component {
  state = {};
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
                  name="Nombre"
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
                  name="Apellido"
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4">
                <input type="date" className="form-control" name="Fecha" />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">Nombre</label>
              <div className="col-sm-8 col-lg-4">
                <input type="time" className="form-control" name="Hora" />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-10 col-lg-10">Areas</label>
              <div className="col-sm-2 col-lg-10">
                Espalda
                <input
                  type="checkbox"
                  className="form-control"
                  name="Espalda"
                />
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
                  name="Aclaraciones"
                />
              </div>
            </div>

            <input
              type="submit"
              className="py-3 mt-2 btn btn-success btn-block"
              value="Confirmar cita"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default FormAppointment;
