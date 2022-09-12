import React, {Component} from 'react';


class Form extends Component {
    constructor (props){
        super(props);
        this.state = {value:""}
    }
    evitarRefresh(event){
        event.preventDefault();
    }
    
    capturarDatos(event){
        this.setState ({value:event.target.value})
    }
    
    render(){
        return(
            <form onSubmit={(event)=> this.evitarRefresh(event)}> 
                <input oncharge = {(event) => this.capturarDatos(event)} value = {this.state.value} />
            
            
             </form> )}}
