import React from "react";
import Busqueda from "../../components/Busqueda";
function resultadoBusqueda() {
    return (
        <React.Fragment>            
            <Busqueda/>
            <h2>Resultado de busqueda de: {this.props.match.params}</h2>

        </React.Fragment>

    );
}

export default resultadoBusqueda;