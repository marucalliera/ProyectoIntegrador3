import React, {Component} from 'react';


let apikey = '73bb2c441012fc5a8247a1d5cb33d69a'
class Tarjeta extends Component{  
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
   
    render () {
        console.log(this.props)
        return (
            <React.Fragment>
                {
                this.state.info === [] ? <h3>Cargando</h3> : 
                    <div>
                        <img />
                        <h2>{this.props.info.title}</h2>
                        <p>this.props.info.title}</p>
                        <p>Ver Mas</p>
                        <p>Agregar a favoritos</p>
                    </div>
            }
            </React.Fragment>
        )
    }
}

export default Tarjeta;