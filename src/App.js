import React from 'react';
import logo from './logo.svg';
import './App.css';

import Avatar from './components/avatar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="content">
        <Avatar 
          firstname="John"
          secondname="James"
          lastname="Doe"
          email="jd@test.org"
          class="my--avatar"
          color="#fff"
          bgcolor="#000"
          borderradius="50"
          size="250"
          textsize="20"
          overcolor="#0f0"
        ></Avatar>
      </section>
      <footer className="App-footer">
        (c) Copyright - Mike Ludemann
      </footer>
    </div>
  );
}

export default App;
