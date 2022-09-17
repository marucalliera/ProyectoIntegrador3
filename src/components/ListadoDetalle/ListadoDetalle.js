import React, {Component} from 'react';
import UnaPelicula from '../UnaPelicula/UnaPelicula';
import {Link} from 'react-router-dom';


let apikey = '73bb2c441012fc5a8247a1d5cb33d69a'
class ListadoDetalle extends Component{  
    constructor(props){
        super(props);
        this.state = {
            datos: '',
            numeroPagina: 1,
            input: ''
        }
    }
    componentDidMount () {
        fetch(this.props.funcionalidades.popular ? `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&page=${this.state.numeroPagina}` : `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&page=${this.state.numeroPagina}`)
        .then(response=>response.json())
        .then(data=> {
           /*  console.log(data) */
            this.setState({datos: data.results, pageNumber: this.state.pageNumber + 1})
            })
        .catch(error=>console.log('El error fue: ' + error))
    }

    masPeliculas() {
        fetch(this.props.funcionalidades.popular ? `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&page=${this.state.numeroPagina}` : `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&page=${this.state.numeroPagina}`)
        .then(response=>response.json())
        .then(data=> {
            console.log(data)
            this.setState({datos: this.state.datos.concat(data.results), numeroPagina: this.state.numeroPagina + 1})
            })
        .catch(error=>console.log('El error fue: ' + error))
    }

    prevRecarga(e){ 
        e.preventDefault();
    };

    saveChanges(e){ 
        this.setState({input: e.target.value, numeroPagina: 0}); 
        fetch (`https://api.themoviedb.org/3/movie/${this.state.input}/lists?api_key=66374e925f9ce0061d8e10191732f374&page=${this.state.numeroPagina}`)
        .then(response=>response.json())
        .then(data=> {
            console.log(data)
            this.setState({datos: this.state.datos, numeroPagina: this.state.numeroPagina})
        })
        .catch(error=> console.log('el error fue' + error))
        console.log(this.state.input);
    };

    filterPeliculas(){

    }

    render () {
        /* console.log(this.props.funcionalidades) */
        return (
            <React.Fragment>
                <h1>{this.props.funcionalidades.popular ? 'Peliculas Populares' : 'Peliculas en Cartel'}</h1>
                
                <form onSubmit={(e) => this.prevRecarga(e)}>
                    
                    <input type='text' placeholder='pelicula' onChange={(e) => this.saveChanges(e)} value={this.state.input} />

                    <input type='reset' value='Submit' />

                </form>   

                <section className='card-container'>
                    {this.state.datos === '' ? <h3>Cargando ...</h3> : 
                    this.state.datos.map((unPersonaje, idx) => <UnaPelicula props={unPersonaje} key={idx} />)
                    }
                </section>
                {this.props.funcionalidades.CargarMas ? <button onClick={() => this.masPeliculas()}> Mas Peliculas </button> : ''}                
                {this.props.funcionalidades.verTodas ? <h1><Link to={this.props.funcionalidades.popular ? '/populares' : '/cartel'}> Ver todas las {this.props.funcionalidades.popular ? 'Peliculas Populares' : 'Peliculas en Cartel'} </Link></h1> : ''}                
            </React.Fragment>
        )

    }
}

export default ListadoDetalle;