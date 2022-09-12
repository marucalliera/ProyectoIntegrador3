import React from "react";
import Busqueda from '../../components/Busqueda/Busqueda'
import ListadoBusqueda from "../../components/ListadoBusqueda/ListadoBusqueda";

function resultadoBusqueda(props) {
    return (
        <React.Fragment>            
            <Busqueda/>
            <h2>Resultado de busqueda de: {props.match.params.id}</h2>
            <ListadoBusqueda busqueda={props.match.params.id}/>

        </React.Fragment>

    );
}

export default resultadoBusqueda;