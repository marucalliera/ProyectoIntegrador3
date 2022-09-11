import React, {Component} from 'react';


let apikey = '73bb2c441012fc5a8247a1d5cb33d69a'
class Detail extends Component{  
    constructor(props){
        super(props);
        this.state = {
            info: []
        }
    }
    
    componentDidMount() {
        let id = this.props.match.params.id
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`)
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
                {}
                <img />
                <h1>  {this.state.info.title}  </h1>
                <p>{this.state.info.popularity}</p>
                <p>{this.state.info.release_date}</p>
                <p>{this.state.info.runtime}</p>
                <p>{this.state.info.overview}</p>
                <p>{this.state.info.genres[0].id}</p>
                <p>Agregar a favoritos</p>
                
            </React.Fragment>
        )
    }
}

export default Detail;