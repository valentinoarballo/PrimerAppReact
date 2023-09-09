import React, {Component} from "react";

class TrakMouse extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            x:0,
            y:0
        }
        this.handleMouseMove = this.handleMouseMove.bind(this)
    }


    handleMouseMove (e) {
        const {clientX, clientY} = e
        this.setState({
            x: clientX,
            y:clientY
        })
        console.log(clientX)
    }

    handleMouseMove2 = (e) => {
        const {clientX, clientY} = e
        this.setState({
            x: clientX,
            y:clientY
        })
        console.log(clientX)
    }

    render () {
        const {x, y} =this.state
        return(
            <>
                <p>x: {x}, y: {y}</p>
                <div style={{
                    justifyContent:"center"
                }}>
                    <div 
                    style={{
                        height:300,
                        width:300,
                        border: 'solid 1px white'
                    }}
                    onMouseMove={this.handleMouseMove2}>
                        
                    </div>
                </div>
            </>
        )
    }
}

export default TrakMouse;