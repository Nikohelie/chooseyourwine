import React, { Component }from 'react';
import { connect } from 'react-redux';
import Checkbox from './Checkbox';
import {checkFilter, unCheckFilter } from '../store/wine/wine.actions';

const checkboxesCategorie= [
    "Prix_doux",
    "Belles découvertes",
    "Valeurs sûres",
    "Vins d'exceptions"
  ]

class CheckboxContainerCategorie extends Component{

    componentWillMount = () => {
        this.selectedCheckboxes = new Set();
    }

    toggleCheckbox = (label, isChecked) => {
        console.log(label);
        console.log(isChecked);
            if(isChecked){
                this.props.unCheckFilter(label);
            }else{
                this.props.checkFilter(label);
            }
      }

      createCheckbox = (label,isChecked) => (
        <Checkbox
                label={label}
                handleCheckboxChange={this.toggleCheckbox}
                isChecked={isChecked}
                key={label}
            />
      )
    
      createCheckboxes = () => (
        checkboxesCategorie.map(item =>{
            return this.createCheckbox(item, this.props.selectedFilter.includes(item))
        })
      )

    render(){
        return(
            <div className="checkbox-container">
            Catégorie
            {this.createCheckboxes()}
            </div>
        )
    }
}

const mapStateToProps = (state) =>(
    {selectedFilter: state.wineReducer.selectedFilter}
)

const mapDispatchToProps = {checkFilter, unCheckFilter }

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxContainerCategorie);

