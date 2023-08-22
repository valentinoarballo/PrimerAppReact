import React from 'react';

function ComprobarEdad (props) {
    let contenido = <p>No se proporciono la edad</p>
    let edad = props.edad 
    if (edad > 18 && !isNaN(edad) ) {
        contenido = <p>es mayor de edad</p>
    } else if (edad < 18 && !isNaN(edad)) {
        contenido = <p>es menor de edad</p>
    }
    return(
        <div>
            {contenido}
        </div>
    )
} 
export default ComprobarEdad;