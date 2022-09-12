import React from "react";
import Listado from "../../components/Listado/Listado";
import Busqueda from "../../components/Busqueda/Busqueda";
import "./Home.css"


function Home() {
    return (
        <React.Fragment>
            <Busqueda/>
            <Listado  funcionalidades={{populares: true}} />
            <Listado  funcionalidades={{populares: false}} />

        </React.Fragment>

    );
}

export default Home;