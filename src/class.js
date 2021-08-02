import React, { Component } from "react";

export class State extends Component {
    // state constructor
    constructor(props){
        super(props);
        this.state={
            count : 0
        }
    }



   
    // function to count the number 
    Counter(){
        this.setState({
            count : this.state.count+1 
        })
    }


   
    render() {
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick= {() => this.Counter()}>COUNTER</button>
              
            </div>

        );
    }

}


