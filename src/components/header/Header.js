import React, { Component } from 'react';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header className="text-center">
                <img className="img-fluid" src="./banner.png" alt="banner"/>
                <h1>Bienvenido</h1>
            </header>
         );
    }
}
 
export default Header;