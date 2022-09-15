import React, {Component} from "react";
import Tarjeta from '../../components/Tarjeta/Tarjeta';

class listadoFavoritos extends Component{

    constructor(){
        super();
        this.state = {
            detallePel:[]
        }
    }

    componentDidMount (){
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage !== null){
            favoritos = JSON.parse(recuperoStorage) // es un array de ids, tenemos que conseguir un array de objetos literales con cada pelicula
            let detallePel = [];
            //tenemos que pasar el array de favoritos a detallePel, recorremos el array y le pedimos al endpoint por los datos de cada pelicula
            
            
        //recorrer el array y pedirla al endpoint por los datos de cada personaje.
        favoritos.forEach(unIdFavorito => {
            //pedir por cada id los datos del personaje
            //https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
            let apikey = '73bb2c441012fc5a8247a1d5cb33d69a'
            let url = `https://api.themoviedb.org/3/movie/${unIdFavorito}?api_key=${apikey}&language=en-US`
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    detallePel.push(data)
                    this.setState({
                        detallePel : detallePel
                    })
                })
                .catch(e => console.log(e))
        })

    }

    }

    render(){
        console.log(this.state.detallePel);
        return(
            <React.Fragment>
                <h2>Mis Peliculas Favoritas</h2>
                 <section className='card-container'>
                    { 
                        this.state.detallePel.map((detallePel, idx) => <Tarjeta key={detallePel.title+idx} info={detallePel}/>)
                    }
                </section>
            </React.Fragment>
                        
        )
    } 
}


export default listadoFavoritos;