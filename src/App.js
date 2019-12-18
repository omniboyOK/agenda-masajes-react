import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/header/Header'

class App extends Component {
  state = {

  }

  render(){
    return(
      <div class="container">
        <Header/>
      </div>
    );
  }
}

export default App;
