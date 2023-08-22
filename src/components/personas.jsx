import React, {Component} from "react";
import ComprobarEdad from "./esAdulto";

class Personas extends Component {
    render () {
        const {listaNombres, listaEdades} = this.props;
        return (
            <div>
                <ul>
                    {listaNombres.map((item, index) => (
                        <li key={index}>
                            {item} 
                            <ComprobarEdad edad={listaEdades[index]}/>
                        </li>
                    ))} 
                </ul>               
            </div>
        );    
    }
}

export default Personas;