import React, {Component} from "react";
import Busqueda from '../../components/Busqueda/Busqueda'
import ListadoBusqueda from "../../components/ListadoBusqueda/ListadoBusqueda";


let apikey = '73bb2c441012fc5a8247a1d5cb33d69a'
class resultadoBusqueda extends Component {

    constructor(props) {
        super(props)
        this.state = {
            peliculasEncontradas: [],
            loading: true
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=${this.props.match.params.name}&page=1&include_adult=true`)
            .then(res => res.json())
            .then(data => this.setState({
                peliculasEncontradas: data.results,
                loading: false
            }))
            .catch()
    };

  
    render() {

        return(
        <React.Fragment>            
            <Busqueda/>
            {
                    this.state.loading ? <h1>Loading</h1> :
                    <>
                        <h2>Resultado de busqueda de: {this.props.match.params.name}</h2>
                        <section className='cardContainer'>
                            {
                                this.state.peliculasEncontradas.length !== 0 ?  this.state.peliculasEncontradas.map((peli, idx) => <ListadoBusqueda busqueda={this.props.match.params.name}/>)
                                : 
                                <h1>No se encontraron resultados</h1>
                            }
                        </section>
                    </>
                }

        </React.Fragment>

    );
} }

export default resultadoBusqueda;