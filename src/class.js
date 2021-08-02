import React, { Component } from "react";

export class State extends Component {
    // state constructor

    
    constructor(){
        super()
        this.state={
            name : "This is the state method "
        }
    }
    // function to change state 


    onchange(){
        this.setState(
            {name : "This is the changeable state function "}
        )
        
    }
    render() {
        return (
            

            <div>
                <h1>{this.state.name} </h1>
                <button onClick = {() => this.onchange()}>click me </button>
            </div>

        )
    }

}


