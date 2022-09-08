import React, {Component} from 'react';


let apikey = '73bb2c441012fc5a8247a1d5cb33d69a'
class Detail extends Component{  
    constructor(props){
        super(props);
        this.state = {
            pelicula: '',
            textoFavorito: ''
        }
    }
    
    componentDidMount () {
        const id = this.props.match.params.id;
        
        let listaLocalStorage = JSON.parse(localStorage.getItem('favoritos'))
        console.log(listaLocalStorage);
        if(listaLocalStorage && listaLocalStorage.includes(parseInt(id))){
           
            this.setState({textoFavorito: 'Eliminar de favoritos'});
        } else {
           this.setState({textoFavorito: 'Agregar a favoritos'});
        }
        
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`)
        .then(response=>response.json())
        .then(data=> {
            this.setState({pelicula: data})
        })
        .catch(error=>console.log('El error fue: ' + error))
    }

    favoritos(id) {
        let listaFavs = [];
        let listaLocalStorage = JSON.parse(localStorage.getItem('favoritos'))
        let listaActualizada = []
        if(listaLocalStorage.length !== 0) {
            listaFavs = listaLocalStorage;
        }
        if(listaFavs.includes(id)){
            this.setState({textoFavorito: 'Agregar a favoritos'});
            listaActualizada = listaFavs.filter( (elm) => {
                return elm !== id;
            });
        } else {
           this.setState({textoFavorito: 'Eliminar a favoritos'});
           listaActualizada = listaFavs;
           listaActualizada.push(id);
        }

        let listaFavsJson = JSON.stringify(listaActualizada);
        localStorage.setItem('favoritos',listaFavsJson);
    }

    render () {
        return (
           
            <React.Fragment>
                {
                this.state.pelicula === '' ? <h3>Cargando ...</h3> : 
                    <article>
                        <img src={`https://image.tmdb.org/t/p/w342/${this.state.pelicula.poster_path}`} alt=""/>
                        <div>
                            <h2> {this.state.pelicula.title}</h2>
                            <ul>
                                {this.state.pelicula.genres.map((obj, idx) => <li key={idx+obj.name}> {obj.name} </li>)}
                            </ul>
                            <div>
                                <p>Fecha de estreno: {this.state.pelicula.release_date}</p>
                                <p>Rating: {this.state.pelicula.vote_average}</p>
                                <p>Duracion: {this.state.pelicula.runtime} min</p>
                            </div>
                            <p onClick={() => this.favoritos(this.state.pelicula.id)}>{this.state.textoFavorito}</p>
                        </div>
                    </article>
                }
            </React.Fragment>
        )

    }
}

export default Detail;