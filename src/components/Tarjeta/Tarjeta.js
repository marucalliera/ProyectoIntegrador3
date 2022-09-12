import React, {Component} from 'react';
import './Tarjeta.css'

let apikey = '73bb2c441012fc5a8247a1d5cb33d69a'
class Tarjeta extends Component{  
    constructor(props){
        super(props);
        this.state = {
            clase: 'oculto',
            texto: 'Mostrar descripcion'
        }
    }

    descripcion () {
        if(this.state.clase === 'oculto'){
            this.setState({clase: 'mostrar', texto: 'Ocultar descripcion'})
        } else {
            this.setState({clase: 'oculto', texto: 'Mostrar descripcion'})

        }

    }

    render () {
        console.log(this.props)
        return (
            <React.Fragment>
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w342/${this.props.info.poster_path}`}/>
                        <h2>{this.props.info.title}</h2>
                        <p className={this.state.clase}>{this.props.info.overview}</p>
                        <p onClick={() => this.descripcion()}>{this.state.texto}</p>
                        <p>Agregar a favoritos</p>
                    </div>
            </React.Fragment>
        )
    }
}

export default Tarjeta;