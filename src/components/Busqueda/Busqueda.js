import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './busqueda.css'

class Busqueda extends Component{
    constructor(props){
        super(props);
        this.state={
            input: "",
        }
    }
    evitarRefresh(evento){
        evento.preventDefault();
        
    }

    
    capturarDatos(evento){
        this.setState({
            input: evento.target.value
        },);
    };
   
    render () {
        return (
            <React.Fragment>
                <form onSubmit={(evento) => this.evitarRefresh(evento)}>
                    <input type='text' placeholder='Buscar' onChange={(evento) => this.capturarDatos(evento)} value={this.state.input} />
                    {
                        this.state.input ? <Link to={`/busqueda/${this.state.input}`}><input type='submit' value='submit' />  </Link> :<input type='submit' value='submit' /> 
                    }
                </form> 
            </React.Fragment>
                )
        
            }
        }
        
        
        export default Busqueda;