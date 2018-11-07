import React, { Component }from 'react';
import Checkbox from './Checkbox';

const checkboxesCategorie= [
    "Prix doux",
    "Belles découvertes",
    "Valeurs sûres",
    "Vins d'exceptions"
  ]

class CheckboxContainerCategorie extends Component{

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
        checkboxesCategorie.map(this.createCheckbox)
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

export default CheckboxContainerCategorie;

