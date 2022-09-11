import React, {Component} from 'react';


let apikey = '73bb2c441012fc5a8247a1d5cb33d69a'
class ListadoBusqueda extends Component{  
    constructor(props){
        super(props);
        this.state = {
            info: []
        }
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