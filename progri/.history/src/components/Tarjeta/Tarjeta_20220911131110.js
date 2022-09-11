import React, {Component} from 'react';
import './Tarjeta.css'

let apikey = '73bb2c441012fc5a8247a1d5cb33d69a'
class Tarjeta extends Component{  
    constructor(props){
        super(props);
        this.state = {
            clase: 'oculto'
        }
    }

    descripcion ( ) {
        this.setState({clase: 'mostrar'})

    }

   
    render () {
        console.log(this.props)
        return (
            <React.Fragment>
                {
                this.state.info === [] ? <h3>Cargando</h3> : 
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w342/${this.props.info.poster_path}`}/>
                        <h2>{this.props.info.title}</h2>
                        <p className={this.state.clase}>{this.props.info.overview}</p>
                        <p onClick={}>Ver Mas</p>
                        <p>Agregar a favoritos</p>
                    </div>
            }
            </React.Fragment>
        )
    }
}

export default Tarjeta;