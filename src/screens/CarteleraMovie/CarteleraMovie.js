import React from "react";
 import Listado from "../../components/Listado/Listado";

 function CarteleraMovie() {
     return (
         <React.Fragment>            
             <Listado  funcionalidades={{verTodas: false, filtroFormulario: true, CargarMas: true, popular: false}} />

         </React.Fragment>

     );
 }
export default CarteleraMovie