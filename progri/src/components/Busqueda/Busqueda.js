//import { relativeTimeThreshold } from 'moment';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './busqueda.css';

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
                <div className="uk-navbar-right">
                    <form onSubmit = {(e)=> this.prevenirCarga(e)} className="uk-search uk-search-default">
                        <input type='search' className="uk-search-input" placeholder="Buscar..." onChange = {(e) => this.GuardarCambios(e)} value = {this.state.input} />
                        <Link to={`/busqueda/id/${this.state.input}`}><button type='submit' className='but'/></Link>
                    
                    </form>
                </div>
            </React.Fragment>
                
        )

    }
}

export default Busqueda;