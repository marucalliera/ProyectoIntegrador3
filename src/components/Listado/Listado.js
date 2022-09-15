import React, {Component} from 'react';
import UnaPeliculaListado from '../UnaPeliculaListado/UnaPeliculaListado';
import Form from '../Form/Form';
import './Listado.css';



let apikey = '73bb2c441012fc5a8247a1d5cb33d69a'

class Listado extends Component{  
    constructor(props){
        super(props);
        this.state = {
            peliculas: [],
            mapeliculas: [],
            pageNumber: 1,
        }
    }
    componentDidMount () {
        fetch(this.props.funcionalidades.populares ? `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&page=${this.state.pageNumber}` : `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&page=${this.state.pageNumber}`)
        .then(response=>response.json())
        .then(data=> {
           /*  console.log(data) */
            this.setState({peliculas: data.results,
                mapeliculas: data.results,
                 pageNumber: this.state.pageNumber})
            })
        .catch(error=>console.log('El error fue: ' + error))
    }

    cargarMas(){
        let url = this.props.funcionalidades.populares ? `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&page=${this.state.pageNumber + 1 }` : `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&page=${this.state.pageNumber + 1}`;
        fetch(url)
            .then(res => res.json())
            .then(data => this.setState(
                {  mapeliculas: this.state.peliculas.concat(data.results),
                    peliculas: this.state.mapeliculas.concat(data.results),
                   pageNumber:data.page + 1,
                }
            ))
            .catch( error => console.log(error))
            
    }

    filtrarPeliculas(Filtro){
        let pelisFiltradas = this.state.peliculas.filter( peli => peli.title.toLowerCase().includes(Filtro.toLowerCase()))
        this.setState({
            mapeliculas: pelisFiltradas,
        })
    }

    


    render () {
        /* console.log(this.props.funcionalidades) */
        return (
            <React.Fragment>
                <h1>{this.props.funcionalidades.popular ? 'Peliculas Populares' : 'Peliculas en Cartel'}</h1>
                <div className={this.props.funcionalidades.filtroFormulario ? 'arriba-todas' : 'ocultar'}>
                    <Form filtrarPelis={(Filtro)=>this.filtrarPeliculas(Filtro)}/>
                </div>
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