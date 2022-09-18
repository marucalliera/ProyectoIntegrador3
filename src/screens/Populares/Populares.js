import React from "react";
import Listado from "../../components/Listado/Listado";

function Popular() {
    return (
        <React.Fragment>            
            <Listado  funcionalidades={{verTodas: false, filtroFormulario: true, CargarMas: true, popular: true}} />

        </React.Fragment>

    );
}

export default Popular;