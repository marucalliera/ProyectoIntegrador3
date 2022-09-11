import React, {Component} from 'react';


let apikey = '73bb2c441012fc5a8247a1d5cb33d69a'
class Detail extends Component{  
    constructor(props){
        super(props);
        this.state = {
         
        }
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