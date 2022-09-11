import React from "react";
function resultadoBusqueda() {
    return (
        <React.Fragment>            
            <Busqueda/>
            <h2>Resultado de busqueda de: {this.props.match.params.id}</h2>

        </React.Fragment>

    );
}

export default resultadoBusqueda;