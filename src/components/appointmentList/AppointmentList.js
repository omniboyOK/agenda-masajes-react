import React from "react";
import AppointmentCard from "../appointmentCard/AppointmentCard.js";

const AppointmentList = ({ citas }) => {
  return (
    <div className="card mt-5 mb-5">
      <h2 className="card-header text-center">Administrar Turnos</h2>
      <div className="card-body">
        <div>
          {citas.map(cita => {
            return <AppointmentCard key={cita.id} cita={cita} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AppointmentList;
