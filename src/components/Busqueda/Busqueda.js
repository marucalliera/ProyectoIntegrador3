//import { relativeTimeThreshold } from 'moment';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './busqueda.css'

class Busqueda extends Component{
    constructor(props){
        super(props);
        this.state = {
       
        }
    }

    render () {
        return (
        <React.Fragment>
            <div className="uk-navbar-right">
                <form onSubmit = {(e)=> this.props.PrevenirCarga(e)} className="uk-search uk-search-default">
                    <input type='search' className="uk-search-input" placeholder="Buscar..." onChange = {(e) => this.props.GuardarCambios(e)} value = {this.props.value} />
                </form>
            </div>
            </React.Fragment>
                
        )

    }
}

export default Busqueda;