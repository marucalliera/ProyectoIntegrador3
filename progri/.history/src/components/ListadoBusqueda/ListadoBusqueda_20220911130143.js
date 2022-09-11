import React, {Component} from 'react';
import Tarjeta from '../Tarjeta/Tarjeta'

let apikey = '73bb2c441012fc5a8247a1d5cb33d69a'
class ListadoBusqueda extends Component{  
    constructor(props){
        super(props);
        this.state = {
            info: []
        }
    }
    
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${this.props.busqueda}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({info: data})
        })
        .catch(error => console.log(error))
    }
   

    render () {
        return (
            <React.Fragment>
                {
                this.state.info === [] ? <h3>Cargando</h3> : 
                    <div>
                        {this.state.info.map((unaPelicula, idx) => <Tarjeta info={unaPelicula} key={idx}/>)}
                    </div>
            }
            </React.Fragment>
        )
    }
}

export default ListadoBusqueda;