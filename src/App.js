import React, { Component } from 'react';
import AppBar from './components/AppBar';
import FiltersBanner from './components/FiltersBanner';
import ListAll from './components/card/ListAll';
import WINES from './data/fdv2017.json';



import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <AppBar />
        </header>         
        <FiltersBanner />       
          <main>
            <ListAll wines={WINES} />
          </main>
        </div>
      
    );
  }
}

export default App;
