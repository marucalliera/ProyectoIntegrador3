//import { relativeTimeThreshold } from 'moment';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Busqueda extends Component{
    constructor(props){
        super(props);
        this.state = {
            input: '',
        }
    }
GuardarCambios (event){
    this.setState({input:event.target.value})
}
PrevenirCarga (event){
    event.preventDefault(

    )
}

    render () {
        return (
            <React.Fragment>
                <form onSubmit = {(e)=> this.prevenirCarga(e)}>
                    <input type='text' onChange = {(e) => this.GuardarCambios(e)} value = {this.state.input}/>
                    <Link to={`/busqueda/id/${this.state.input}`}><button type='submit'/></Link>
                    
                </form>
            </React.Fragment>
                
        )

    }
}

export default Busqueda;