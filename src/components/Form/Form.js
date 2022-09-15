import React, {Component} from 'react';


class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        }
    }

    evitarRefresh(evento){
        evento.preventDefault();
        
    }
    capturarDatos(evento){
        this.setState({
          value: evento.target.value,  
        },()=>this.props.filtrarPelis(this.state.value))
    }
    render(){
        return(
            <form onSubmit={(evento)=>this.evitarRefresh(evento)} className='mb-4'>
                <input onChange={(evento)=>this.capturarDatos(evento)} type="text" name="usuario" value={this.state.value} />
                
            </form>)

        }
}

export default Form;