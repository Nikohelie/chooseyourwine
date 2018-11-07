import React, { Component } from 'react';
import AppBar from './components/AppBar';
import FiltersBanner from './components/FiltersBanner';
import WineCard from './components/card/WineCard';



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
            <WineCard />
          </main>
        </div>
      
    );
  }
}

export default App;
