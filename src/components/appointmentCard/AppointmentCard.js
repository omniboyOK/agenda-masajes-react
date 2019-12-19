import React from "react";

const AppointmentCard = ({ cita }) => {
  return (
    <div className="card mt-3">
      <div className="card-body text-center">
        <h3>Reserva de: {cita.nombre + " " + cita.apellido}</h3>
        <h4>{cita.hora + " " + cita.fecha}</h4>
        <p>Aclaración: {cita.aclaraciones}</p>
      </div>
    </div>
  );
};

export default AppointmentCard;
