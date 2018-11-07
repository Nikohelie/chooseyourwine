import React, { Component }from 'react';
import { connect } from 'react-redux';
import wineFilters from './WineColorCheckbox';
import Checkbox from './Checkbox';

class CheckboxContainerWineColor extends Component{
    constructor(props){
        super(props);

        this.state ={
            checkedItems: new Map(),
            title:"Robe du vin"
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
        //this.props.onStoreFilter();
    }
    render(){
        
        return(
            
            <div className="checkbox-container">
            {this.state.title}
              {
                  wineFilters.map(item =>(
                      <label  className="lbl" key={item.key}>
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

const mapDispatchToProps = dispatch =>{
    return{
        onStoreFilter: (event) => dispatch({type:'WINE_ACTIONS.FILTER_WINE', value:event.target.name})
    }
}

export default connect(null,mapDispatchToProps)(CheckboxContainerWineColor);

