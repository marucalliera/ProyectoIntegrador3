import React from "react";
import Busqueda from '../../components/Busqueda/Busqueda'
function resultadoBusqueda(props) {
    return (
        <React.Fragment>            
            <Busqueda/>
            <h2>Resultado de busqueda de: {props.match.params.id}</h2>

        </React.Fragment>

    );
}

export default resultadoBusqueda;