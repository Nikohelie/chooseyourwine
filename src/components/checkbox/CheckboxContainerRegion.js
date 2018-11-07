import React, { Component }from 'react';
import { connect } from 'react-redux';
import regionCheckbox from './RegionCheckbox';
import Checkbox from './Checkbox';

class CheckboxContainerRegion extends Component{
    constructor(props){
        super(props);

        this.state ={
            checkedItems: new Map(),
            title:"Région"
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) =>{
        event.preventDefault();
        const item = event.target.name;
        const isChecked = event.target.checked;
        this.setState(prevState =>({
            checkedItems:prevState.checkedItems.set(item,isChecked)
        }));
    }
    render(){
        
        return(
            
            <div className="checkbox-container">
            {this.state.title}
              {
                  regionCheckbox.map(item =>(
                      <label className="lbl" key={item.key}>
                      <Checkbox 
                        name={item.name} 
                        checked={this.state.checkedItems.get(item.name)}
                        onChange={this.handleChange} />
                        {item.name}
                      </label>
                  ))
              }
            </div>
        )
    }
}


export default CheckboxContainerRegion;

