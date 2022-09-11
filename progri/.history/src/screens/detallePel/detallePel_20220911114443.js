import React, {Component} from 'react';


let apikey = '73bb2c441012fc5a8247a1d5cb33d69a'
class Detail extends Component{  
    constructor(props){
        super(props);
        this.state = {
         
        }
    }
    
    componentDidMount() {
        
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`)
        .then(response => response.json())
        .then(data => {

        })
        .catch(error => console.log(error))
    }
   

    render () {
        return (
            <React.Fragment>
                
                
            </React.Fragment>
        )
    }
}

export default Detail;