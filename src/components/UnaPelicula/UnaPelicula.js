import React, {Component} from 'react';
import {Link} from 'react-router-dom';




class UnaPelicula extends Component{
    constructor(props){
        super(props);
        this.state = {
            claseDescripcion: 'hide',
            textoDescripcion: 'Ver descripcion',
            favMessage: 'Agregar a Favoritos', //texto inicial
        }
    }

    componentDidMount(){
        let favoritos=[];
        let recuperoStorage = localStorage.getItem('favoritos')
        //Paso 1.a: primero preguntamos si hay algo en localstorage. Si devuelve null esta vacio, y si develuve algo distinto de null significa que alguien ya cargo ese favoritos
        if (recuperoStorage!==null){
            //con parse lo transformamos en array
            let  favoritosToArray = JSON.parse(recuperoStorage);
            //Si hay algo distinto de null lo paso al listado favoritos. Recien con la linea de abajo el array no va a estar vacio.
            favoritos = favoritosToArray

        }
        if (favoritos.includes(this.props.props.id)){
            this.setState({
                favMessage: 'Eliminar de Favoritos'
            })
        }

    }

    verDescripcion(){
        if(this.state.claseDescripcion === 'hide'){
            this.setState({
                claseDescripcion: 'show', textoDescripcion: 'Ocultar descripcion'
            })
        } else {
            this.setState({
                claseDescripcion: 'hide', textoDescripcion: 'Ver descripcion'
            })
        }
    }

    agregarYQuitarDeFavoritos(id){
        // Funcion Agregar: esta funcion tiene que agregar un id dentro de un array y guardarlo en localStorage
        // Funcion Quitar: Si el id ya existe que el usuario pueda quitarlo de este array
       // Paso 1: Para que la funcion reciba un id necesitamos un parametro
       //de arranque tenemos ese array vacio. 
        let favoritos=[];
        let recuperoStorage = localStorage.getItem('favoritos')
        //Paso 1.a: primero preguntamos si hay algo en localstorage. Si devuelve null esta vacio, y si develuve algo distinto de null significa que alguien ya cargo ese favoritos
        if (recuperoStorage!==null){
            //con parse lo transformamos en array
            let  favoritosToArray = JSON.parse(recuperoStorage);
            //Si hay algo distinto de null lo paso al listado favoritos. Recien con la linea de abajo el array no va a estar vacio.
            favoritos = favoritosToArray

        }
        //Paso 1.b: Preguntamos si el id ya esta en el array

        if (favoritos.includes(id)){
         //includes retorna un booleano. Si lo encuentra en en el array = true
        //filter me va a permitir comprar el elemento del array contra algo. Si se cumple el dato queda en el array y sino se elimina
            favoritos = favoritos.filter(unId => unId !== id); //va a retornan un nuevo array y deberiamos mostrarle al usuario un nuevo texto
            //agregar de favoritos   
            this.setState({
                favMessage: 'Agregar a Favoritos'
            })

        } else {
            favoritos.push(id); //esto es para poner el id en el array y mostrarle un texto distintos
            //quitar de favoritos
            this.setState({
                favMessage: 'Eliminar de Favoritos'
            })

        }

        //Paso 3: Transformar el array en cadena de texto 
        let favoritosToString = JSON.stringify(favoritos);
        //Paso 4: Meterlo en localStorage. Con set item le decimos que en favoritos le guardamos el favoritos to string
        localStorage.setItem('favoritos', favoritosToString);
        //agregar console.log del local para ir viendo que nos trae a medida que escribirmos
        console.log(localStorage);
    }

    render () {
        return (
            <article className='character-card' >
                <p onClick = {()=>this.agregarYQuitarDeFavoritos(this.props.props.id)}>{this.state.favMessage}</p>
                <Link to={`/unapelicula/id/${this.props.props.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w342${this.props.props.poster_path}`} alt="" />
                </Link> 
                <h2> {this.props.props.title} </h2> 
                <p onClick={() => this.verDescripcion()} className='more'> {this.state.textoDescripcion} </p>
                <p className={this.state.claseDescripcion} >Descripcion: {this.props.props.overview}</p>
            </article>
        )

    }
}

export default UnaPelicula;

