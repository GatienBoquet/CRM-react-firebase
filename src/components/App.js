import React, { Component } from 'react';
import './App.css';
import app from 'firebase/app';
import data from '../data.json';
import Grid from './Grid';
import Form from './Form';
import Config from './FireBase_config';

class App extends Component{
  constructor(props){
    super(props);
    this.state = { data };
  }

  componentWillMount(){
    app.initializeApp(Config)

  }

  render() {
    return(
    <div>
      <div>
        <div className="navbar-fixed">
          <nav className="blue lighten-2">
            <div className="nav-wrapper">
              <a href="/" className="brand-logo center">Contacts</a>
            </div>
          </nav>
        </div>
      </div>
      <div>
        <Form />
        <Grid items={this.state.data}/>
      </div>
    </div>
    )
  }
}

export default App;
