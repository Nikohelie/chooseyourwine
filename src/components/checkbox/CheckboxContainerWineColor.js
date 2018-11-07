import React, { Component }from 'react';
import Checkbox from './Checkbox';

const checkboxesWineColor= [
    "Rouge",
    "Rosé",
    "Blanc",
    "Effervescent"
  ]

class CheckboxContainerWineColor extends Component{

    componentWillMount = () => {
        this.selectedCheckboxes = new Set();
    }

    toggleCheckbox = label => {
        console.log(label);
        if (this.selectedCheckboxes.has(label)) {
          this.selectedCheckboxes.delete(label.name);
        } else {
          this.selectedCheckboxes.add(label.name);
        }
      }

      createCheckbox = label => (
        <Checkbox
                label={label}
                handleCheckboxChange={this.toggleCheckbox}
                key={label}
            />
      )
    
      createCheckboxes = () => (
            checkboxesWineColor.map(this.createCheckbox)
      )

    render(){
        
        return(
            
            <div className="checkbox-container">
            Robe du vin
            {this.createCheckboxes()}
            </div>
        )
    }
}

export default CheckboxContainerWineColor;

