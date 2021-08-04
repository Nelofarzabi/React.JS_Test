import React, { Component } from "react";

export class State extends Component {
   
    render() {
        let arrays = [{
            name : "NELOFAR", 
            class : "SOFTWARE ENGINEER " , 
            age : 19
        },
        {
            name : "SADAF", 
            class : "DEVELOPER " , 
            age : 19
        },{
            name : "MADIA ", 
            class : "SOFTWARE ENGINEER " , 
            age : 19
        }]
   
       
        return (
            <div>
                <h2>{arrays.map(x=>   <h4>I am {x.name} iam a {x.class} engineer i am {x.age} years old</h4>)}</h2>
              
            </div>

        );
    }

}


