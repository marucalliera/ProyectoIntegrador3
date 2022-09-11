import React, {Component} from 'react';


let apikey = '73bb2c441012fc5a8247a1d5cb33d69a'
class ListadoBusqueda extends Component{  
    constructor(props){
        super(props);
        this.state = {
            info: []
        }
    }
    
    componentDidMount() {
        let id = this.props.match.params.id
        fetch(`https://api.themoviedb.org/3/search/movie?a=73bb2c441012fc5a8247a1d5cb33d69a&query=Shrek&page=1`)
        .then(response => response.json())
        .then(data => {
            console.log(data.genres[0].name)
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
                        
                    </div>
            }
            </React.Fragment>
        )
    }
}

export default ListadoBusqueda;