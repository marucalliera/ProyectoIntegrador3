import React, {Component} from "react";
import {Link} from 'react-router-dom';
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
            let url = `/unapelicula/id/${unIdFavorito}`
            fetch(url)
                .then(res => res.json())
                .then(data => detallePel.push(data))
                .catch(e => console.log(e))
        })

        console.log(detallePel);
    }

    }

    render(){
        return(
            <React.Fragment>
                <h2>Mis Peliculas Favoritas</h2>
                 <section className='card-container'>
                    { 
                        this.state.detallePel.map( (detallePel, idx) => <Tarjeta key={detallePel.name+idx} info={detallePel}/>)
                    }
                </section>
            </React.Fragment>
                        
        )
    } 
}


export default listadoFavoritos;