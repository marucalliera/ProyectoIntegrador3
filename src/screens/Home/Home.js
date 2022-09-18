import React, {Component} from "react";
import Listado from "../../components/Listado/Listado";
import Busqueda from "../../components/Busqueda/Busqueda";
import "./Home.css"
import CharacterCard from "../../components/CharacterCard /CharacterCard";
import UnaPelicula from "../../components/UnaPelicula/UnaPelicula";


class Home extends Component {
    constructor(){
        super()
        this.state={
            input:'',
            resultadoBusqueda: []
        }
    }
    render(){
        //console.log(this.state.input);
        return (
            <>
            <Busqueda/>
            { 
                this.state.resultadoBusqueda.length <= 0 ?
                <React.Fragment>
                    <br></br>
                    <Listado  funcionalidades={{verTodas: true, filtroFormulario: false, CargarMas: false, popular: true}} />
                    <Listado  funcionalidades={{verTodas: true, filtroFormulario: false, CargarMas: false, popular: false}} />

                </React.Fragment>
                :
                this.state.resultadoBusqueda.map((movie, idx) => <UnaPelicula key={movie.title + idx} props={movie}/>)
            }
            </>
    
        );
    }
}

export default Home;