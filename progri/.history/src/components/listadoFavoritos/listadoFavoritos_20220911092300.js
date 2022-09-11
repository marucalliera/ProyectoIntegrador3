import React, {Component} from 'react';
import UnaPeliculaListado from '../UnaPeliculaListado/UnaPeliculaListado';


let apikey = '73bb2c441012fc5a8247a1d5cb33d69a'
class ListadoFavs extends Component{  
    constructor(props){
        super(props);
        this.state = {
            datos: [],
            input: ''
        }
    }
   

export default ListadoFavs;