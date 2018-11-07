import React, { Component }from 'react';
import ContainerFilter from '../components/checkbox/ContainerFilter';


class FiltersBanner extends Component{
constructor(props){
    super(props)
    this.state={
        show:false,
    }
    this.handleClick = this.handleClick.bind(this)
}
    
    handleClick = () => {
            this.setState({show: !this.state.show});
    }

    render(){
        return(
            <div className="filters-banner">
                <button className="filter-button" onClick={this.handleClick}>Filtres</button>
                <ContainerFilter show={this.state.show}/>
                
            </div>
        )
    }
}

export default FiltersBanner;