import React, { Component} from 'react';
import { connect } from 'react-redux';
import wine from '../../assets/fdv2017.json';


class WineCard extends Component{
        state={
            listWine:[],
            counterOfCard:0
        }

        componentDidMount(){
            let arrayWine = [];
            wine.forEach(wineElement => {
                arrayWine.push(wineElement);
            });
            let sizeArrayWine= arrayWine.length;
            this.setState({
                listWine: arrayWine,
                counterOfCard: sizeArrayWine
            })
            
        }
    

    render(){
        return(
            <div className="card">
                
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
         listOfWine: state.counter
    };
};

export default connect(mapStateToProps)(WineCard);