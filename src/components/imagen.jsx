import React from "react";
import "../estilos/imagen.css";

function MostrarImagen () {
    return(
        <img
        className="imagen"
        src={require("../imagenes/image.png")}
        alt="Logo Itec"/>
    )
}

export default MostrarImagen;