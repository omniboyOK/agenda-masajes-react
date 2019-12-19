import React from "react";
import AppointmentCard from "../appointmentCard/AppointmentCard.js";

const AppointmentList = ({ reservas }) => {
  return (
    <div className="card mt-5 mb-5">
      <h2 className="card-header text-center">Administrar Turnos</h2>
      <div className="card-body">
        <div>
          {reservas.map(reserva => {
            return <AppointmentCard key={reserva.id} reserva={reserva} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AppointmentList;
