import React, {Component} from "react";
import Listado from "../../components/Listado/Listado";
import Busqueda from "../../components/Busqueda/Busqueda";
import "./Home.css"
import CharacterCard from "../../components/CharacterCard /CharacterCard";
import UnaPeliculaListado from "../../components/UnaPeliculaListado/UnaPeliculaListado";


class Home extends Component {
    constructor(){
        super()
        this.state={
            input:'',
            resultadoBusqueda: []
        }
    }

    GuardarCambios (event){
        this.setState({input:event.target.value})
    }
    PrevenirCarga (event){
        event.preventDefault();

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=73bb2c441012fc5a8247a1d5cb33d69a&language=en-US&page=1&include_adult=true&query=${this.state.input}`)
        .then(res => res.json())
        .then(data => this.setState({
            resultadoBusqueda: data.results
        }, () => console.log(this.state.resultadoBusqueda)))
        //Hacer busqueda al endpoint de busqueda
        // fetch con el texto a buscar
    }

    render(){
        console.log(this.state.input);
        return (
            <>
            <Busqueda GuardarCambios={(e)=>this.GuardarCambios(e)} PrevenirCarga={(e)=>this.PrevenirCarga(e)} value={this.state.input} />
            { 
                this.state.resultadoBusqueda.length <= 0 ?
                <React.Fragment>
                    <br></br>
                    <Listado  funcionalidades={{populares: true}} />
                    <Listado  funcionalidades={{populares: false}} />
                </React.Fragment>
                :
                this.state.resultadoBusqueda.map((movie, idx) => <UnaPeliculaListado key={movie.title + idx} props={movie}/>)
            }
            </>
    
        );
    }
}

export default Home;