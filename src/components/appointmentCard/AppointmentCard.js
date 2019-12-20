import React from "react";

const AppointmentCard = ({ reserva, deleteAppointment}) => {
  return (
    <div className="card mt-3">
      <div className="card-body text-center">
        <h3>Reserva de: {reserva.nombre + " " + reserva.apellido}</h3>
        <h4>{reserva.hora + " " + reserva.fecha}</h4>
        <p>Aclaración: {reserva.aclaraciones}</p>
        <button 
            className="btn btn-danger"
            onClick={() => deleteAppointment(reserva.id)}
        >Eliminar</button>
      </div>
    </div>
  );
};

export default AppointmentCard;