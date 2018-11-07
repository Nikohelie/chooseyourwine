import React, { Component } from 'react';
import AppBar from './components/AppBar';
import { connect } from 'react-redux';
import { getAllWinesAction } from './components/store/wine/wine.actions';
import FiltersBanner from './components/FiltersBanner';
import ListAll from './components/card/ListAll';
import WINES from './data/fdv2017.json';
import './App.scss';

class App extends Component {

  componentDidMount(){
    this.props.getAllWinesAction();
  }

  render() {
    return (
      <div className="App">
        <header>
          <AppBar />
        </header>         
        <FiltersBanner />       
          <main>
            <ListAll wines={this.props.wines} />
          </main>
        </div>
      
    );
  }
}

const mapStateToProps = state =>(
  {wines: state.wineReducer.selectedWines}
)

const mapDispatchToProps = {getAllWinesAction}

export default connect(mapStateToProps, mapDispatchToProps)(App);
