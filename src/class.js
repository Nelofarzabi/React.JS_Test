import React, { Component } from "react";

export class State extends Component {
    
    render() {
        const {name  , className} = this.props;
   
        return (
            <div>
              <h1>Hallo {name} you are in {className}</h1>
            </div>

        );
    }

}


