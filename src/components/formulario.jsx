import React, { Component } from "react"

class Formulario extends Component {
    
    constructor(props) {
        super(props)
        this.state={
            nombre : "",
            correo : ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault() 
        alert("nombre: "+this.state.nombre)
    }

    handleOnChangeNombre = (e) => {
        this.setState({
            ...this.state,
            nombre: e.target.value
        })
    }
    handleOnChangeCorreo = (e) => {
        this.setState({
            ...this.state,
            nombre: e.target.value
        })
    }

    render(){
        const {nombre, correo} = this.state
        return(
            <>
                <form 
                onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            id="nombre" 
                            placeholder="John Doe" 
                            value={nombre}
                            onChange={this.handleOnChangeNombre}/>
                    </p>
                    <p>
                        <label htmlFor="correo">Correo</label>
                        <input 
                        id="correo" 
                        placeholder="John@Doe" 
                        value={correo}
                        onChange={this.handleOnChangeCorreo}/>
                    </p>
                    <p>
                        <button type="submit">Suscribe</button>
                    </p>
                </form>
            </>
        )
    }
}

export default Formulario;