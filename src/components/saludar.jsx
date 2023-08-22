import React from "react";


function Saludar (props) {
    const {nombre, apellido} = props
    return(
        <h2>Bienvenido {nombre} {apellido}!</h2>
    )
}


export default Saludar;