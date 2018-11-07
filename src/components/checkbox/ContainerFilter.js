import React, { Component, Fragment } from 'react';
import CheckBoxWineColor from './CheckboxContainerWineColor';
import CheckBoxCategorie from './CheckboxContainerCategorie';
import CheckBoxRegion from './CheckboxContainerRegion';


class ContainerFilter extends Component{


    render(){
        let display ="";
        if(this.props.show){
           display= <div className="filter-container">
            <Fragment>
                <CheckBoxWineColor />
                <CheckBoxCategorie />
                <CheckBoxRegion />
            </Fragment>
            </div>;
        }else{
            display=<div className="filter-container-none">
            <Fragment>
                <CheckBoxWineColor />
                <CheckBoxCategorie />
                <CheckBoxRegion />
            </Fragment>
            </div>;
        }
        return(
            <div className="container">
              {display}
            </div>
                
        )
    }
}

export default ContainerFilter;