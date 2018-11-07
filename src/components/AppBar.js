import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../assets/logoWine.png';
import './AppBar.scss';

class AppBar extends Component{

  render(){
    return(
      <nav className="AppBar">
        <img className="AppBar-logo" src={logo}  alt="Wine" />
        <span>
            <p className="headerTitle">Fête du vin 2017 </p> 
            <p>{this.props.ctr}</p>
        </span>     
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return{
    ctr: state.counter
  };
};


export default connect(mapStateToProps)(AppBar);
