import React, {Component} from 'react';
import UnaPeliculaListado from '../UnaPeliculaListado/UnaPeliculaListado';
import {Link} from 'react-router-dom';


let apikey = '73bb2c441012fc5a8247a1d5cb33d69a'

class Listado extends Component{
    constructor (props){
        super(props);
        this.state = {
            peliculas: [],
            mapeliculas: [],
            numeroPagina: 1,
        }
    }

    componentDidMount(){
        fetch(this.props.funcionalidades.popular ? `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&page=${this.state.numeroPagina}`:`https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&page=${this.state.numeroPagina}`) //el ? reemplaza el if 
        .then(response => response.json())
        .then (data => {this.setState ({
                peliculas: data.results,
                mapeliculas: data.results,
                numeroPagina: 1,
        })} 
            ) .catch( error=> error)
    
    }

    render(){
        return (
            <React.Fragment>
                <h1> {this.props.funcionalidades.popular ? 'Peliculas Populares': 'Peliculas en Cartelera'}</h1>
                
                <section className='card-container'>
                    {this.state.mapeliculas === '' ? <h3>Cargando ...</h3> : 
                    this.state.mapeliculas.map((unaPelicula, idx) => <UnaPeliculaListado props={unaPelicula} key={idx} />)
                    }
                </section>     
                <button className='cargar' type="button" onClick={ ()=>this.cargarMas()}>Cargar más películas</button>

            </React.Fragment>
        )
    }
}

export default Listado;