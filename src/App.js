import React, { Component } from "react";
import "./bootstrap.min.css";
import Header from "./components/header/Header";
import Cita from "./components/formAppointment/FormAppointment";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <Cita />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
