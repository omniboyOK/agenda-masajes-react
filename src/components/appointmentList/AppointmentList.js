import React from "react";
import AppointmentCard from "../appointmentCard/AppointmentCard.js";

const AppointmentList = ({ reservas, deleteAppointment }) => {
  //generamos un mensaje segun si hay reservas o no
  const mensaje = reservas.length === 0 ? "Reserva un turno para verlo aquí" : "Administra tus turnos"
  return (
    <div className="card mt-5 mb-5">
      <h2 className="card-header text-center">{mensaje}</h2>
      <div className="card-body">
        <div>
          {reservas.map(reserva => {
            return (
              <AppointmentCard
                key={reserva.id}
                reserva={reserva}
                deleteAppointment={deleteAppointment}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AppointmentList;