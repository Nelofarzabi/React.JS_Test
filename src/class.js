import React ,  { Component } from "react";

 export class Comp extends Component{
    render (){
        return(
           React.createElement('div' , null , React.createElement('h1' , null , 'Hello react without JSX extension'))
        )
    }

}


